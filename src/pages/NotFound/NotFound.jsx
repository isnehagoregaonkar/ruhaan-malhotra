import React from "react";
import { Link } from "react-router-dom";
import GoHomeButton from "../../components/ui/Button/GoHomeButton";

const NotFound = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(https://example.com/banner-image.jpg)" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-green-900"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif">
          404 Not Found
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl">
          The page you are looking for does not exist.
        </p>
        <Link to="/ruhaan-malhotra/" className="m-6">
          <GoHomeButton> Go Home</GoHomeButton>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
