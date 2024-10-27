import React from "react";

const GrayText = ({ children }) => {
  return (
    <p className="text-gray-500 text-sm leading-relaxed text-justify">
      {children}
    </p>
  );
};

export default GrayText;
