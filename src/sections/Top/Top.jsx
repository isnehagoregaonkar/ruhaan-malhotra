import React from "react";
import AnimatedImages from "../../components/Animations/AnimatedImages";
import TransparentButton from "../../components/ui/Button/TransparentButton";
import LeftIconButton from "../../components/ui/Button/LeftIconButton";
import { FaEnvira } from "react-icons/fa";
import { PiHandHeartThin } from "react-icons/pi";
import { IoBasketOutline } from "react-icons/io5";
import ScrollAnimation from "../../components/Animations/AnimationWrapper";

const Top = () => {
  return (
    <div>
      <ScrollAnimation animation="fade-up">
        {/* Main section */}
        <div className="flex flex-col md:flex-row bg-green-900 rounded-3xl m-4 md:h-[700px] items-center transition-all duration-500 ease-in-out">
          <div className="flex flex-col p-8 md:w-1/2 text-center md:text-left animate-fadeIn transition-all duration-700 ease-in-out">
            <h1 className="text-white text-xl md:text-2xl transition-all duration-300 ease-in-out">
              Waste to Wonder!
            </h1>
            <h2 className="text-white text-4xl md:text-7xl font-semibold mt-4 capitalize animate-fadeIn transition-transform duration-700 ease-in-out">
              Achieving sustainability through design!
            </h2>
            <div className="flex flex-col md:flex-row gap-6 mt-8 md:mt-14 justify-center items-center md:justify-start">
              <TransparentButton className="transform transition-transform duration-300 hover:scale-105">
                Read More
              </TransparentButton>
              <LeftIconButton className="transform transition-transform duration-300 hover:scale-105" />
            </div>
          </div>
          <div className="p-8 md:w-1/2 hidden md:block animate-fadeIn transition-opacity duration-700 ease-in-out">
            <AnimatedImages />
          </div>
        </div>
      </ScrollAnimation>
      {/* Info sections */}
      <ScrollAnimation animation="fade-down">
        <div className="flex flex-col md:flex-row gap-8 p-4 md:p-8 transition-all duration-500 ease-in-out">
          <div className="rounded-2xl border-gray-300 border p-6 md:w-1/3 animate-fadeIn transition-transform duration-500 ease-in-out hover:scale-105">
            <div className="bg-lime-500 rounded-full inline-block p-4">
              <PiHandHeartThin className="text-white text-xl md:text-2xl transition-all duration-300 hover:animate-bounce" />
            </div>
            <h3 className="font-semibold text-lg md:text-xl text-green-900 mt-2 transition-colors duration-300 ease-in-out">
              Artisac Initiative
            </h3>
            <p className="text-sm text-gray-500 mt-4 transition-all duration-300 ease-in-out">
              The initiative is dedicated to supporting Dubai’s drive for no
              plastic, offering a practical alternative that benefits both the
              local community and the environment.
            </p>
          </div>
          <div className="rounded-2xl border-gray-300 border p-6 md:w-1/3 animate-fadeIn transition-transform duration-500 ease-in-out hover:scale-105">
            <div className="bg-lime-500 rounded-full inline-block p-4">
              <IoBasketOutline className="text-white text-xl md:text-2xl transition-all duration-300 hover:animate-bounce" />
            </div>
            <h3 className="font-semibold text-lg md:text-xl text-green-900 mt-2 transition-colors duration-300 ease-in-out">
              Pop Art Sketching
            </h3>
            <p className="text-sm text-gray-500 mt-4 transition-all duration-300 ease-in-out">
              The designs on the bags are created by Ruhaan himself, using his
              artistic talents to combine pop art figures in a unique method,
              promoting environmental responsibility.
            </p>
          </div>
          <div className="rounded-2xl border-gray-300 border p-6 md:w-1/3 animate-fadeIn transition-transform duration-500 ease-in-out hover:scale-105">
            <div className="bg-lime-500 rounded-full inline-block p-4">
              <FaEnvira className="text-white text-xl md:text-2xl transition-all duration-300 hover:animate-bounce" />
            </div>
            <h3 className="font-semibold text-lg md:text-xl text-green-900 mt-2 transition-colors duration-300 ease-in-out">
              Sustainability
            </h3>
            <p className="text-sm text-gray-500 mt-4 transition-all duration-300 ease-in-out">
              Artisacs bags are designed with sustainability at their core,
              reducing waste and highlighting the importance of reusing
              materials that would otherwise contribute to environmental
              pollution.
            </p>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Top;
