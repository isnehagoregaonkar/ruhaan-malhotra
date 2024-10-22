import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";

const Slider = () => {
  const slides = [
    {
      id: 1,
      photo: "https://api.dicebear.com/7.x/lorelei/svg",
      name: "Sneha Goregaonkar",
      profession: "Fullstack Developer",
      text: "Artisacs' eco-friendly bags are amazing! Stylish and sustainable. Love the initiative! Fantastic products with a purpose. Love my Artisacs bag! Artisacs bags are the perfect blend of style and sustainability! I’m proud to support such an eco-conscious initiative",
    },
    {
      id: 2,
      photo: "https://api.dicebear.com/7.x/lorelei/svg",
      name: "Shehnaz",
      profession: "Fashion Designer",
      text: "A fantastic idea promoting sustainability. I carry my Artisacs bag everywhere! I love my Artisacs bag! The quality is superb, and it feels great knowing it’s made from recycled materials.",
    },
    {
      id: 3,
      photo: "https://api.dicebear.com/7.x/lorelei/svg",
      name: "Saurabh",
      profession: "Manager",
      text: "Great quality and beautiful designs. Proud to support such a worthy cause. Stylish, practical, and planet-friendly—Artisacs bags are everything I could ask for! I carry mine everywhere. Highly recommend!",
    },
    {
      id: 4,
      photo: "https://api.dicebear.com/7.x/lorelei/svg",
      name: "Subhash",
      profession: "Designer",
      text: "Fantastic products with a purpose. The designs are beautiful, and the cause behind Artisacs makes me feel good about my purchase. Artisacs is more than just a product; it’s a statement for sustainability. I love using my eco-friendly tote every day!",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="relative w-full h-[480px] overflow-hidden border-2 border-gray-300 rounded-2xl bg-lime-500">
      <div
        className="flex transition-transform duration-500 ease-in-out "
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="min-w-full h-full flex items-start justify-center flex-col text-white p-4 md:p-16 text-justify font-thin gap-4 md:gap-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 md:w-10 md:h-10"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-lg md:text-2xl">{slide.text}</p>
            <div className="flex items-center">
              <img
                src={slide.photo || "/api/placeholder/80/80"}
                alt={slide.name}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
              />
              <div className="ml-3">
                <h3 className="text-xl md:text-2xl font-bold">{slide.name}</h3>
                <p className="text-sm md:text-base">{slide.profession}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="absolute bottom-3 w-full flex items-center px-16 py-4">
        <div className="flex-grow border-t border-white"></div>
        <div className="flex space-x-3 ml-5">
          <button
            className="bg-white text-green-900 p-4 rounded-full hover:bg-green-900 hover:text-white"
            onClick={prevSlide}
          >
            <FaArrowLeft />
          </button>
          <button
            className="bg-white text-green-900 p-4 rounded-full hover:bg-green-900 hover:text-white"
            onClick={nextSlide}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
