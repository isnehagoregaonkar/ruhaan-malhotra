import React from "react";
import { gallery7 } from "../../assets/assets";
import PrimaryButton from "../../components/ui/Button/PrimaryButton";
import HeadingTitle from "../../components/ui/Title/HeadingTitle";
import GrayText from "../../components/ui/Text/GrayText";
import ScrollAnimation from "../../components/Animations/AnimationWrapper";

const AboutDiapair = () => {
  return (
    <ScrollAnimation>
      <div className="w-full px-4 sm:px-8 lg:px-16 py-4 sm:py-6 lg:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-4 order-2 md:order-1">
            <div className="space-y-2">
              <HeadingTitle
                title="Diapair: Connecting Students and Alumni"
                subtitle="Student to Connect Platform"
              />
            </div>

            <div className="space-y-4">
              <GrayText>
                Diapair is a student-to-alumni platform I created to build a
                more interconnected community within my school. Its mission is
                to bridge the gap between current high school students and
                alumni by connecting them through shared interests. The platform
                facilitates networking and mentorship opportunities, helping
                students gain insights from those who have previously navigated
                their paths. We host panels and discussions across schools and
                universities, engaging over 1,000 registered students. Diapair
                empowers students with valuable guidance and fosters a
                supportive community that enhances the overall educational
                experience.
              </GrayText>
            </div>

            <div className="pt-2">
              <a
                href="https://www.diapair.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <PrimaryButton>Discover More</PrimaryButton>
              </a>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative order-1 md:order-2">
            <div className="rounded-lg overflow-hidden aspect-[4/3] w-full">
              <img
                src={gallery7}
                alt="Coaching session in progress"
                className="w-full h-full object-cover transform hover:scale-105 transition duration-500 ease-in-out"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default AboutDiapair;
