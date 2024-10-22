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
          <div
            key={index}
            className="min-w-full h-full flex items-start justify-center flex-col text-white p-16 text-justify font-thin gap-6"
          >
            <FaQuoteLeft className="text-4xl" />
            <p className="text-2xl">{slide.text}</p>
            <div className="flex items-center">
              <img src={slide.photo} className="w-20 h-20 rounded-full" />
              <div className="ml-3">
                <h3 className="text-2xl font-bold">{slide.name}</h3>
                <p>{slide.profession}</p>
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
