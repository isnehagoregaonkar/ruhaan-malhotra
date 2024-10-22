import React from "react";

const SecondaryButton = ({ children }) => {
  return (
    <div>
      <button className=" bg-transparent py-4 px-6 rounded-full text-green-900 flex items-center hover:bg-lime-500 hover:text-white border-lime-500 border">
        {children}
        <span className="ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default SecondaryButton;
