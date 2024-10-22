import React, { useState, useEffect, useRef } from "react";
import HeadingTitle from "../../components/ui/Title/HeadingTitle";
import { gallery6 } from "../../assets/assets";
import Slider from "../../components/ui/Slider/Slider";

const TestimonialSection = () => {
  return (
    <section className="mx-auto py-6 md:py-10 px-4 md:px-16 text-center">
      <div className="my-4 md:my-8">
        <HeadingTitle
          title="What People Are Saying"
          subtitle="Feedback from our community on Artisacs' eco-friendly journey and impact"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-4 md:gap-8 p-4 md:p-8">
        {/* Image Container */}
        <div className="w-full lg:w-2/5">
          <div className="bg-fuchsia-50 rounded-2xl overflow-hidden">
            <img
              src={gallery6}
              alt="Gallery"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Slider Container */}
        <div className="w-full lg:w-3/5 bg-lime-500 rounded-2xl">
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
