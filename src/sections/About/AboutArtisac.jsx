import React, { useState, useEffect } from "react";
import { asset, gallery2, gallery3, gallery6 } from "../../assets/assets";
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
    <section className="m-8">
      <div className="flex p-14 items-center gap-16">
        <div className="w-1/2 flex gap-4">
          <div className="flex w-1/2 flex-col gap-6 ">
            <div className="relative inline-block">
              <div className="absolute top-3 left-4 rounded-2xl border border-lime-500 w-11/12 h-full z-[999]"></div>
              <img
                src={gallery3}
                className="rounded-2xl relative w-11/12"
                alt="Bordered Image"
              />
            </div>
            {/* <CircularText /> */}
            <div className="bg-lime-500 p-4 rounded-2xl h-28">
              <div className="flex gap-4 items-center justify-center">
                <p className="text-6xl font-bold text-white transition duration-500 ease-out">
                  Artisac
                </p>
                <div>
                  {/* <span className="text-2xl text-white">rtisac</span> */}
                  <br />
                  {/* <span className="text-2xl text-white">Sustainable</span> */}
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-1/2 flex-col gap-6">
            <div className="bg-lime-500 p-4 rounded-2xl h-28">
              <div className="flex gap-4 items-center justify-center">
                <p className="text-6xl font-bold text-white transition duration-500 ease-out">
                  {count}
                </p>
                <div>
                  <span className="text-2xl text-white">Year</span>
                  <br />
                  <span className="text-2xl text-white">Student</span>
                </div>
              </div>
            </div>
            <img src={gallery2} className="rounded-2xl" />
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-6">
          <HeadingTitle
            subtitle="Why Choose Us"
            title="We are Aligned with Dubai's Year of Sustainability"
          />
          <GrayText>
            In a world increasingly aware of environmental issues, even the
            youngest among us are finding innovative ways to contribute. One
            such inspiring story comes from Ruhaan Malhotra, a Year 12 student
            at Dubai International Academy Emirates Hills and founder of
            Artisacs (@artisacs). He is making waves with his innovative
            initiative that promotes sustainability through designing and
            sourcing sustainable tote bags made from recycled materials like
            cotton and eco-juco.
          </GrayText>
          <GrayText>
            By integrating creative drawing with environmental consciousness,
            Artisacs not only supports the local community but also contributes
            to the broader goal of making Dubai a leader in sustainable living.
          </GrayText>
          <GrayText>
            In a world increasingly aware of environmental issues, even the
            youngest among us are finding innovative ways to contribute.{" "}
          </GrayText>

          <div className="flex gap-6 ">
            <SecondaryButton>Read More</SecondaryButton>
            <div className="flex gap-4">
              <IoIosCall className="text-white text-[6px] bg-lime-500 rounded-full p-4 hover:animate-shake h-12 w-12" />
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
