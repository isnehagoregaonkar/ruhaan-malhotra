import React from "react";

const PrimaryButton = ({ children, icon }) => {
  return (
    <div>
      <button className="w-full justify-center bg-lime-500 py-4 px-6 rounded-full text-white flex items-center hover:bg-green-90">
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

export default PrimaryButton;
