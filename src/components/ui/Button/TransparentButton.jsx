import React from "react";

const TransparentButton = ({ children }) => {
  return (
    <div className="group relative inline-block">
      <button className="relative py-4 px-6 rounded-full flex items-center text-white border border-white hover:border-none overflow-hidden">
        <span className="absolute inset-0 w-0 bg-lime-500 transition-all duration-300 ease-out group-hover:w-full"></span>
        <span className="relative z-10 flex items-center">
          {children}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5 ml-2"
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

export default TransparentButton;
