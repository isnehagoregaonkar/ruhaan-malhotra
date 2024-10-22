import React from "react";
import { FaPlay } from "react-icons/fa";

const LeftIconButton = () => {
  return (
    <div className="flex items-center gap-3">
      <FaPlay
        className="text-white text-[6px] bg-white rounded-full bg-opacity-15 p-4 animate-pulse h-12 w-12"
        style={{
          zIndex: 999,
        }}
      />
      <button className="bg-transparent rounded-full text-white flex items-center hover:text-lime-500">
        Watch Our Videos
      </button>
    </div>
  );
};

export default LeftIconButton;
