import React, { useState } from "react";
import PrimaryButton from "../../components/ui/Button/PrimaryButton";
import { logo } from "../../assets/assets";
import AnimatedImages from "../../components/Animations/AnimatedImages";
import TransparentButton from "../../components/ui/Button/TransparentButton";
import LeftIconButton from "../../components/ui/Button/LeftIconButton";
import { FaEnvira } from "react-icons/fa";
import { PiHandHeartThin } from "react-icons/pi";
import { IoBasketOutline } from "react-icons/io5";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Hamburger and close icons

const Top = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      {/* Top navigation */}
      <div className="flex justify-between p-4 items-center bg-[#f1f5eb] z-50 relative">
        <div className="flex gap-2 items-center">
          <img src={logo} alt="logo" className="w-16 h-16 md:w-20 md:h-20" />
          <h1 className="text-green-900 text-2xl md:text-4xl font-semibold">
            Artisacs
          </h1>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-3 md:gap-5 text-green-900 text-lg md:text-[18px]">
          <a className="hover:text-lime-500" href="/">
            Home
          </a>
          <a className="hover:text-lime-500" href="/about">
            About
          </a>
          <a className="hover:text-lime-500" href="/products">
            Products
          </a>
          <a className="hover:text-lime-500" href="/contact">
            Contact
          </a>
        </div>
        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-green-900">
            {isMobileMenuOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
          </button>
        </div>
        <PrimaryButton>Get in Touch</PrimaryButton>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="flex flex-col md:hidden bg-[#f1f5eb] p-4 space-y-4 text-green-900 text-lg">
          <a className="hover:text-lime-500" href="/">
            Home
          </a>
          <a className="hover:text-lime-500" href="/about">
            About
          </a>
          <a className="hover:text-lime-500" href="/products">
            Products
          </a>
          <a className="hover:text-lime-500" href="/contact">
            Contact
          </a>
          <PrimaryButton>Get in Touch</PrimaryButton>
        </div>
      )}

      {/* Main section */}
      <div className="flex flex-col md:flex-row bg-green-900 rounded-3xl m-4 md:h-[700px] items-center">
        <div className="flex flex-col p-8 md:w-1/2 text-center md:text-left">
          <h1 className="text-white text-xl md:text-2xl">Waste to Wonder!</h1>
          <h2 className="text-white text-4xl md:text-7xl font-semibold mt-4 capitalize">
            Achieving sustainability through design!
          </h2>
          <div className="flex flex-col md:flex-row gap-6 mt-8 md:mt-14 justify-center items-center md:justify-start">
            <TransparentButton>Read More</TransparentButton>
            <LeftIconButton />
          </div>
        </div>
        <div className="p-8 md:w-1/2">
          <AnimatedImages />
        </div>
      </div>

      {/* Info sections */}
      <div className="flex flex-col md:flex-row gap-8 p-4 md:p-8">
        <div className="rounded-2xl border-gray-300 border p-6 md:w-1/3">
          <div className="bg-lime-500 rounded-full inline-block p-4">
            <PiHandHeartThin className="text-white text-xl md:text-2xl transition-all duration-300 hover:animate-shake" />
          </div>
          <h3 className="font-semibold text-lg md:text-xl text-green-900 mt-2">
            Artisac Initiative
          </h3>
          <p className="text-sm text-gray-500 mt-4">
            The initiative is dedicated to supporting Dubai’s drive for no
            plastic, offering a practical alternative that benefits both the
            local community and the environment.
          </p>
        </div>
        <div className="rounded-2xl border-gray-300 border p-6 md:w-1/3">
          <div className="bg-lime-500 rounded-full inline-block p-4">
            <IoBasketOutline className="text-white text-xl md:text-2xl transition-all duration-300 hover:animate-shake" />
          </div>
          <h3 className="font-semibold text-lg md:text-xl text-green-900 mt-2">
            Pop Art Sketching
          </h3>
          <p className="text-sm text-gray-500 mt-4">
            The designs on the bags are created by Ruhaan himself, using his
            artistic talents to combine pop art figures in a unique method,
            promoting environmental responsibility.
          </p>
        </div>
        <div className="rounded-2xl border-gray-300 border p-6 md:w-1/3">
          <div className="bg-lime-500 rounded-full inline-block p-4">
            <FaEnvira className="text-white text-xl md:text-2xl transition-all duration-300 hover:animate-shake" />
          </div>
          <h3 className="font-semibold text-lg md:text-xl text-green-900 mt-2">
            Sustainability
          </h3>
          <p className="text-sm text-gray-500 mt-4">
            Artisacs bags are designed with sustainability at their core,
            reducing waste and highlighting the importance of reusing materials
            that would otherwise contribute to environmental pollution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Top;
