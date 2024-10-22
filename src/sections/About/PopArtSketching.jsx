import React from "react";
import { motion } from "framer-motion";

const PopArtSketching = () => {
  return (
    <section className="bg-white p-6 my-10 rounded-lg shadow-lg flex flex-col md:flex-row">
      <div className="md:w-1/2 flex flex-col justify-center">
        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Pop Art Sketching
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At Artisacs, we believe in the power of self-expression through art.
          Our pop art sketching workshops provide underprivileged children with
          a platform to unleash their creativity and develop their artistic
          skills.
        </motion.p>
        <motion.p
          className="text-gray-600 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Through engaging activities, we introduce young artists to the vibrant
          world of pop art, encouraging them to express their thoughts,
          emotions, and stories through sketching.
        </motion.p>
      </div>
      <motion.img
        src="/path/to/pop-art-sketching-image.jpg" // Replace with your image path
        alt="Pop Art Sketching"
        className="md:w-1/2 rounded-lg shadow-lg mt-4 md:mt-0"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      />
    </section>
  );
};

export default PopArtSketching;
