import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Masonry from "react-masonry-css";
import { X } from "lucide-react";
import HeadingTitle from "../../components/ui/Title/HeadingTitle";
import {
  gallery11,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
} from "../../assets/assets";
import ContactSection from "../Contact/Contact";

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Sample image data - replace with your actual images
  const images = [
    { id: 2, src: gallery2, alt: "Gallery Image 2" },
    { id: 4, src: gallery4, alt: "Gallery Image 4" },
    { id: 3, src: gallery3, alt: "Gallery Image 3" },
    { id: 6, src: gallery6, alt: "Gallery Image 6" },
    { id: 7, src: gallery7, alt: "Gallery Image 7" },
    { id: 8, src: gallery8, alt: "Gallery Image 8" },
    { id: 9, src: gallery9, alt: "Gallery Image 9" },
    { id: 11, src: gallery11, alt: "Gallery Image 11" },
  ];

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center my-8">
          <HeadingTitle subtitle="Gallery" title="Uncovering Hidden" />
        </div>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto -ml-4"
          columnClassName="pl-4 bg-clip-padding"
        >
          {images.map((image) => (
            <motion.div
              key={image.id}
              className="mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto rounded-lg shadow-md cursor-pointer"
                onClick={() => setSelectedImage(image)}
                layoutId={`image-${image.id}`}
              />
            </motion.div>
          ))}
        </Masonry>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                layoutId={`image-${selectedImage.id}`}
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <motion.button
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300 bg-black bg-opacity-50 rounded-full p-2"
                onClick={() => setSelectedImage(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <ContactSection />
    </section>
  );
};

export default ImageGallery;
