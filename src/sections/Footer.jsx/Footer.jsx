import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-4">
          <h3 className="text-xl font-bold mb-2">Stay Connected</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-200"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/artisacs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition duration-200"
            >
              Instagram
            </a>
            <a
              href="mailto:your-email@example.com"
              className="hover:text-red-400 transition duration-200"
            >
              Email
            </a>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Ruhaan Malhotra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
