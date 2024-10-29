import React, { useState } from "react";
import { logo, new_logo } from "../../assets/assets";
import PrimaryButton from "../../components/ui/Button/PrimaryButton";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Hamburger and close icons
import { Link } from "react-router-dom";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      {/* Top navigation */}
      <nav className="flex justify-between p-4 items-center bg-[#f1f5eb] z-50 relative">
        {/* Logo */}
        <a href="/">
          <div className="flex gap-2 items-center">
            <img src={new_logo} alt="logo" className="w-16 h-16 md:w-20" />
            <h1 className="text-green-900 text-2xl md:text-4xl font-semibold font-serif hidden lg:block">
              Artisacs
            </h1>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-3 md:gap-5 text-green-900 text-lg md:text-[18px]">
          <Link
            to="/"
            className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-lime-500 after:transition-transform after:duration-300 hover:text-lime-500 hover:after:scale-x-100"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-lime-500 after:transition-transform after:duration-300 hover:text-lime-500 hover:after:scale-x-100"
          >
            About
          </Link>
          <Link
            to="/gallery"
            className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-lime-500 after:transition-transform after:duration-300 hover:text-lime-500 hover:after:scale-x-100"
          >
            Gallery
          </Link>
          <Link
            to="/products"
            className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-lime-500 after:transition-transform after:duration-300 hover:text-lime-500 hover:after:scale-x-100"
          >
            Products
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-green-900">
            {isMobileMenuOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-[70px] left-0 w-full bg-[#f1f5eb] flex flex-col items-center md:hidden text-green-900">
            <Link
              to="/"
              className="py-2 hover:text-lime-500"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="py-2 hover:text-lime-500"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
            <Link
              to="/gallery"
              className="py-2 hover:text-lime-500"
              onClick={toggleMobileMenu}
            >
              Gallery
            </Link>
            <Link
              to="/products"
              className="py-2 hover:text-lime-500"
              onClick={toggleMobileMenu}
            >
              Products
            </Link>
            <Link
              to="/ruhaan"
              className="flex items-center text-lime-500 underline underline-offset-4 hover:text-lime-900"
            >
              Other Initiatives
            </Link>
            <div className=" m-4">
              <a href="#contact">
                <PrimaryButton>Get in Touch</PrimaryButton>
              </a>
            </div>
          </div>
        )}

        <div className="hidden md:flex gap-4">
          <Link
            to="/ruhaan"
            className="flex items-center text-lime-500 underline underline-offset-4 hover:text-lime-900"
          >
            Other Initiatives
          </Link>
          <a href="#contact">
            <PrimaryButton>Get in Touch</PrimaryButton>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
