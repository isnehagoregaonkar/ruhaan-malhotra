import React from "react";

const SecondaryButton = ({ children }) => {
  return (
    <div>
      <button className=" bg-transparent py-4 px-6 rounded-full text-green-900 flex items-center hover:bg-lime-500 hover:text-white border-lime-500 border">
        {children}
      </button>
    </div>
  );
};

export default SecondaryButton;
