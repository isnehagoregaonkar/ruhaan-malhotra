import React from "react";
import HeadingTitle from "../../components/ui/Title/HeadingTitle";
import { gallery6 } from "../../assets/assets";
import Slider from "../../components/ui/Slider/Slider";
import ScrollAnimation from "../../components/Animations/AnimationWrapper";

const TestimonialSection = () => {
  return (
    <section className="mx-auto py-6 md:py-10 px-4 md:px-16 text-center">
      <ScrollAnimation animateIn="fadeIn">
        <HeadingTitle
          title="What People Are Saying"
          subtitle="Feedback from our community on Artisacs' eco-friendly journey and impact"
        />

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
      </ScrollAnimation>
    </section>
  );
};

export default TestimonialSection;
