import React, { useState, useEffect } from "react";
import { gallery2, gallery3 } from "../../assets/assets";
import SecondaryButton from "../../components/ui/Button/SecondaryButton";
import { IoIosCall } from "react-icons/io";
import HeadingTitle from "../../components/ui/Title/HeadingTitle";
import GrayText from "../../components/ui/Text/GrayText";

const AboutArtisac = () => {
  const [count, setCount] = useState(0);

  // Increment counter to 12
  useEffect(() => {
    if (count < 12) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 100); // Adjust the duration as needed
      return () => clearInterval(timer); // Clear interval on component unmount
    }
  }, [count]);

  return (
    <section className="px-4 py-8 md:p-8">
      <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16 max-w-7xl mx-auto">
        {/* Left Column - Images and Stats */}
        <div className="w-full lg:w-1/2 flex flex-col md:flex-row gap-4">
          {/* First Column */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            {/* Bordered Image */}
            <div className="relative inline-block">
              <div className="absolute top-3 left-4 rounded-2xl border border-lime-500 w-11/12 h-full z-[1]"></div>
              <img
                src={gallery3}
                className="rounded-2xl relative w-11/12 animate-fadeIn"
                alt="Bordered Image"
              />
            </div>
            {/* Stats Box 1 */}
            <div className="bg-lime-500 p-4 rounded-2xl animate-fadeIn">
              <div className="flex gap-4 items-center justify-center">
                <p className="text-4xl md:text-6xl font-bold text-white transition duration-500 ease-out">
                  Artisac
                </p>
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            {/* Stats Box 2 */}
            <div className="bg-lime-500 p-4 rounded-2xl hidden md:block animate-fadeIn">
              <div className="flex gap-4 items-center justify-center">
                <p className="text-4xl md:text-6xl font-bold text-white transition duration-500 ease-out">
                  {count} {/* Dynamically showing the counter */}
                </p>
                <div>
                  <span className="text-xl md:text-2xl text-white">Year</span>
                  <br />
                  <span className="text-xl md:text-2xl text-white">
                    Student
                  </span>
                </div>
              </div>
            </div>
            {/* Second Image */}
            <img
              src={gallery2}
              className="rounded-2xl w-full animate-fadeIn"
              alt="Gallery"
            />
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <HeadingTitle
            subtitle="Why Choose Us"
            title="We are Aligned with Dubai's Year of Sustainability"
          />
          <GrayText>
            In a world increasingly aware of environmental issues, even the
            youngest among us are finding innovative ways to contribute. One
            such inspiring story comes from Ruhaan Malhotra, a Year 12 student
            at Dubai International Academy Emirates Hills and founder of
            Artisacs (@artisacs).
          </GrayText>
          <GrayText>
            By integrating creative drawing with environmental consciousness,
            Artisacs not only supports the local community but also contributes
            to the broader goal of making Dubai a leader in sustainable living.
          </GrayText>
          <GrayText>
            In a world increasingly aware of environmental issues, even the
            youngest among us are finding innovative ways to contribute.
          </GrayText>

          {/* Contact Section */}
          <div className="flex gap-2 mt-4 flex-wrap justify-between md:gap-8 md:justify-start w-full">
            <SecondaryButton>Read More</SecondaryButton>
            <div className="flex gap-2">
              <div className="bg-lime-500 rounded-full p-4 h-12 w-12 flex items-center justify-center hover:animate-bounce">
                <IoIosCall className="text-white h-6 w-6" />
              </div>
              <div>
                <p className="text-green-900">Call Us Now</p>
                <p className="text-green-900 font-semibold">+971 55 876 4168</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutArtisac;
