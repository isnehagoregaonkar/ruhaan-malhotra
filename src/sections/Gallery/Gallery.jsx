import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Masonry from "react-masonry-css";
import { X } from "lucide-react";
import HeadingTitle from "../../components/ui/Title/HeadingTitle";
import {
  article1,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  product1,
  product2,
  product3,
  product4,
  product5,
  self1,
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
    { id: 12, src: gallery12, alt: "Gallery Image 12" },
    { id: 5, src: gallery13, alt: "Gallery Image 13" },
    { id: 1, src: gallery14, alt: "Gallery Image 14" },
    { id: 10, src: self1, alt: "Gallery Image 10" },
    { id: 13, src: article1, alt: "Gallery Image 1" },
    { id: 14, src: product5, alt: "Gallery Image 5" },
    { id: 15, src: product4, alt: "Gallery Image 5" },
    { id: 16, src: product3, alt: "Gallery Image 5" },
    { id: 17, src: product2, alt: "Gallery Image 5" },
    { id: 18, src: product1, alt: "Gallery Image 5" },
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
