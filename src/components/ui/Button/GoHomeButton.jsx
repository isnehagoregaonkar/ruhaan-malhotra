import React from "react";

const GoHomeButton = ({ children }) => {
  return (
    <div>
      <button className="w-full justify-center bg-lime-500 py-2 px-4 rounded-full text-white flex items-center hover:border hover:border-lime-500 hover:bg-green-900 hover:text-lime-500">
        {children}
      </button>
    </div>
  );
};

export default GoHomeButton;
