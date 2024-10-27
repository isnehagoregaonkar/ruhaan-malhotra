import React from "react";
import { self1 } from "../../assets/assets";
import FullWidthVideo from "../../components/ui/FullWidthVideo";
import HeadingTitle from "../../components/ui/Title/HeadingTitle";
import GrayText from "../../components/ui/Text/GrayText";
import SecondaryButton from "../../components/ui/Button/SecondaryButton";
import { IoIosCall } from "react-icons/io";
import ScrollAnimation from "../../components/Animations/AnimationWrapper";

const AboutRuhaan = () => {
  return (
    <ScrollAnimation>
      <div className="w-full">
        {/* Main container with responsive padding */}
        <div className="flex flex-col lg:flex-row justify-between bg-white p-4 sm:p-8 lg:p-16 gap-8">
          {/* Left Section with Image and Video */}
          <div className="relative w-full lg:w-2/5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Main Image */}
              <img
                src={self1}
                alt="Ruhaan"
                className="w-full h-auto object-cover rounded-lg"
              />

              {/* Video Thumbnail - Responsive positioning */}
              <div className="absolute bottom-4 right-0 w-32 sm:w-40 lg:w-52 aspect-video border-2 border-lime-500">
                <FullWidthVideo />
              </div>
            </div>
          </div>

          {/* Right Section with Content */}
          <div className="w-full lg:w-3/5 flex flex-col gap-4">
            {/* Title Section */}
            <HeadingTitle
              title="Ruhaan Malhotra"
              subtitle="Meet Versatile Personality"
            />

            {/* Text Content with proper spacing */}
            <div className="space-y-4">
              <GrayText>
                I'm Ruhaan Malhotra, and I'm excited to share my journey with
                you today. I am the founder of Artisacs, an initiative that
                promotes sustainability by creating eco-friendly tote bags from
                recycled materials. Each bag is designed by me and blends
                vibrant pop art with a commitment to environmental
                responsibility. Through this initiative, we support Dubai's
                no-plastic initiative, and all proceeds benefit the Udyam Trust
                NGO in New Delhi, where I have the privilege of teaching pop art
                to underprivileged children each summer.
              </GrayText>

              <GrayText>
                In addition to Artisacs, I also founded and led Capture@DIA, the
                largest photography club at Dubai International Academy. I had
                the honor of managing a group of over 30 passionate students,
                organizing weekly workshops, and collaborating with the Al
                Serkal Arts Foundation to host the UAE's first student-led
                photography exhibition.
              </GrayText>

              <GrayText>
                Another project close to my heart is Diapair, a platform I
                created to connect current high school students with alumni. By
                fostering a community through shared interests, we've engaged
                over 1,000 students in various events, helping them build
                valuable networks and gain insights into their futures.
              </GrayText>
            </div>

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
      </div>
    </ScrollAnimation>
  );
};

export default AboutRuhaan;
