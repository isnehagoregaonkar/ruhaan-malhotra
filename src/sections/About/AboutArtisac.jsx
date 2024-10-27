import React, { useState, useEffect } from "react";
import {
  gallery2,
  gallery3,
  gallery4,
  product1,
  product4,
  product5,
} from "../../assets/assets";
import SecondaryButton from "../../components/ui/Button/SecondaryButton";
import { IoIosCall } from "react-icons/io";
import HeadingTitle from "../../components/ui/Title/HeadingTitle";
import GrayText from "../../components/ui/Text/GrayText";
import ScrollAnimation from "../../components/Animations/AnimationWrapper";
import TransparentButton from "../../components/ui/Button/TransparentButton";

const AboutArtisac = () => {
  const [count, setCount] = useState(0);

  // Increment counter to 12
  useEffect(() => {
    if (count < 500) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 10); // Adjust the duration as needed
      return () => clearInterval(timer); // Clear interval on component unmount
    }
  }, [count]);

  return (
    <section className="my-8">
      <ScrollAnimation>
        <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-8 lg:gap-16 w-full bg-green-900 pt-6">
          <div className="w-full lg:w-1/3 flex flex-col gap-6 pt-8 px-8 ">
            <p className="text-white ">
              Ruhaan Malhotra supports underprivileged children through Artisacs
              by dedicating his summers to teaching pop art and self-expression
              at the Udyam Trust NGO in New Delhi, India. Through this
              collaboration, all proceeds from Artisacs' eco-friendly bags go
              directly to the NGO, helping fund education and creative
              development initiatives for these children.
            </p>
            <a
              href="https://udyamtrust.com/"
              target="_blank"
              rel="noreferrer"
              className="pb-6"
            >
              <TransparentButton>Visit Udyam Trust</TransparentButton>
            </a>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col gap-6 mt-4 items-center">
            <img
              src={gallery2}
              className="rounded-t-full  w-11/12 animate-fadeIn"
              alt="Bordered Image"
            />
          </div>
          <div className="w-full lg:w-1/3 flex flex-col gap-6 text-white font-serif">
            <h1 className="text-4xl md:text-6xl font-bold animate-fadeIn text-center lg:text-left ">
              Helping children Achieve their dreams
            </h1>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16 max-w-7xl mx-auto px-4 py-8 md:p-8">
          {/* Left Column - Images and Stats */}
          <div className="w-full lg:w-1/2 flex flex-col md:flex-row gap-4">
            {/* First Column */}
            <div className="w-full md:w-1/2 flex flex-col gap-6">
              {/* Bordered Image */}
              <div className="relative inline-block">
                <div className="absolute rounded-2xl inset-4 border border-lime-500 w-10/12 z-[1]"></div>
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
                    {count}+
                  </p>
                  <div>
                    <span className="text-xl md:text-2xl text-white">Bags</span>
                    <br />
                    <span className="text-xl md:text-2xl text-white">Sold</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Column */}
            <div className="w-full md:w-1/2 flex flex-col gap-6">
              {/* Stats Box 2 */}
              <div className="bg-lime-500 p-4 rounded-2xl hidden md:block animate-fadeIn">
                <div className="flex gap-4 items-center justify-center">
                  <p className="text-4xl md:text-6xl font-bold text-white">
                    Artisacs
                  </p>
                </div>
              </div>
              {/* Second Image */}

              <div className="relative inline-block">
                <div className="absolute rounded-2xl inset-4 border border-lime-500 w-10/12 z-[1] "></div>
                <img
                  src={product4}
                  className="rounded-2xl relative w-11/12 animate-fadeIn"
                  alt="Bordered Image"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="w-full lg:w-1/2 flex flex-col">
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
              Artisacs not only supports the local community but also
              contributes to the broader goal of making Dubai a leader in
              sustainable living.
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
                  <p className="text-green-900 font-semibold">
                    +971 55 876 4168
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default AboutArtisac;
