import React, { useState, useEffect, useRef } from "react";
import HeadingTitle from "../../components/ui/Title/HeadingTitle";
import { gallery6 } from "../../assets/assets";
import Slider from "../../components/ui/Slider/Slider";

const TestimonialSection = () => {
  return (
    <section className="mx-auto py-10 px-16 text-center">
      <div className="my-8">
        <HeadingTitle
          title={"What People Are Saying"}
          subtitle={
            "Feedback from our community on Artisacs' eco-friendly journey and impact"
          }
        />
      </div>

      <div className="flex gap-8 p-8">
        <div className="w-2/5 bg-fuchsia-50 h-fit rounded-2xl">
          <img src={gallery6} className="h-fit rounded-2xl" />
        </div>
        <div className="w-3/5 bg-lime-500 h-fit rounded-2xl">
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
