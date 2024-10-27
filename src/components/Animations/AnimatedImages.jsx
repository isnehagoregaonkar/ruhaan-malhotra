import React from "react";
import { product3 } from "../../assets/assets";

const AnimatedImages = () => {
  return (
    <div className="relative w-full h-[680px] flex justify-center items-center">
      <div
        className="absolute w-full h-[650px] object-cover opacity-80 animate-move-right bg-lime-500 rounded-full"
        style={{ zIndex: 1 }}
      />

      <img
        src={product3}
        alt="Image 3"
        className="absolute min-w-full h-fit object-cover rounded-lg animate-move-up"
        style={{ zIndex: 3 }}
      />
    </div>
  );
};

export default AnimatedImages;
