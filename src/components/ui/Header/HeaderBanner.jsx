import React from "react";

const HeaderBanner = ({ title, subtitle }) => {
  return (
    <header
      className="relative w-full h-96 bg-cover bg-center"
      style={{ backgroundImage: "url(https://example.com/banner-image.jpg)" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-green-900"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1
          className="text-4xl md:text-6xl font-bold mb-4 font-serif"
          style={{
            fontFamily: "Pirata One",
            letterSpacing: "2px",
          }}
        >
          {title}
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl">{subtitle}</p>
      </div>
    </header>
  );
};

export default HeaderBanner;
