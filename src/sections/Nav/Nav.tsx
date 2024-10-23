import React, { useState } from "react";
import { logo } from "../../assets/assets";
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
        <div className="flex gap-2 items-center">
          <img src={logo} alt="logo" className="w-16 h-16 md:w-20" />
          <h1 className="text-green-900 text-2xl md:text-4xl font-semibold">
            Artisacs
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-3 md:gap-5 text-green-900 text-lg md:text-[18px]">
          <Link to="/" className="hover:text-lime-500">
            Home
          </Link>
          <Link to="/about" className="hover:text-lime-500">
            About
          </Link>
          <Link to="/products" className="hover:text-lime-500">
            Products
          </Link>
          <a href="#contact" className="hover:text-lime-500">
            Contact
          </a>
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
              to="/products"
              className="py-2 hover:text-lime-500"
              onClick={toggleMobileMenu}
            >
              Products
            </Link>
            <a
              href="#contact"
              className="py-2 hover:text-lime-500"
              onClick={toggleMobileMenu}
            >
              Contact
            </a>
            <div className="m-4">
              <PrimaryButton>Get in Touch</PrimaryButton>
            </div>
          </div>
        )}

        {/* "Get in Touch" button (Visible on Desktop only) */}
        <div className="hidden md:flex">
          <PrimaryButton>Get in Touch</PrimaryButton>
        </div>
      </nav>
    </>
  );
};

export default Nav;
