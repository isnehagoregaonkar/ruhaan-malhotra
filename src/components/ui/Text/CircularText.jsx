import React from "react";

const CircularText = () => {
  const text = "Tote bags using eco-friendly materials • ";

  return (
    <div className="relative flex items-center justify-center rounded-full bg-[#f1f5eb] border-green-700 border h-36 w-">
      {/* Rotating Text */}
      <div className="absolute h-full w-full flex items-center justify-center animate-rotate-circle">
        {Array.from(text).map((letter, index) => (
          <span
            key={index}
            className="absolute text-green-700 font-semibold"
            style={{
              transform: `rotate(${
                index * (360 / text.length)
              }deg) translate(45px)`,
              transformOrigin: "0 0",
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CircularText;
