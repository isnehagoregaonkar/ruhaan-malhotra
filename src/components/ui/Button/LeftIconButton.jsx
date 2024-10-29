import React from "react";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const LeftIconButton = () => {
  return (
    <Link to="/about">
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
    </Link>
  );
};

export default LeftIconButton;
