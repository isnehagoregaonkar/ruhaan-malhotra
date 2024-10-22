import React from "react";

const Nav = () => {
  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between p-4 items-center shadow-md bg-[#f1f5eb] z-50 mb-2">
      <h1 className="text-green-900 font-bold text-4xl">Artisac</h1>
      <div className="flex gap-5 text-green-900 text-[18px]">
        <a className="hover:text-lime-500" href="/">
          Home
        </a>
        <a className="hover:text-lime-500" href="/about">
          About
        </a>
        <a className="hover:text-lime-500" href="/contact">
          Contact
        </a>
      </div>
      <div>
        <button className=" bg-lime-500 py-4 px-6 rounded-full text-white flex items-center hover:bg-green-900">
          Get in Touch
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
    </div>
  );
};

export default Nav;
