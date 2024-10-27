import React from "react";
import { gallery12, gallery13, gallery14 } from "../../assets/assets";
import HeadingTitle from "../../components/ui/Title/HeadingTitle";
import GrayText from "../../components/ui/Text/GrayText";
import ScrollAnimation from "../../components/Animations/AnimationWrapper";

const AboutCaptureDIA = () => {
  // Placeholder image URLs - replace these with your actual image URLs
  const placeholderImages = {
    gallery12: "/api/placeholder/800/400",
    gallery13: "/api/placeholder/400/300",
    gallery14: "/api/placeholder/400/300",
  };

  return (
    <ScrollAnimation>
      <section className="container mx-auto px-4 py-12 ">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Large image */}
            <div className="col-span-2">
              <img
                src={gallery12}
                alt="Photography club event"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Small images */}
            <div className="space-y-4">
              <img
                src={gallery13}
                alt="Photography workshop"
                className="w-full h-40 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <img
                src={gallery14}
                alt="Photography exhibition"
                className="w-full h-40 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <HeadingTitle
              subtitle="About Capture DIA"
              title="Capture@DIA: A Journey Through Photography"
            />
            <div className="space-y-4">
              <GrayText>
                Capture@DIA is the photography club I proudly presided over for
                the past three years. During my leadership, I transformed it
                into Dubai International Academy's largest photography club,
                managing a dedicated team of over 30 students. We hosted weekly
                workshops and seminars, providing our members with hands-on
                experience and the opportunity to enhance their skills.
              </GrayText>
              <GrayText>
                In addition to capturing every school event, we took our passion
                for photography a step further by partnering with the Al Serkal
                Arts Foundation. This collaboration led to the UAE's first
                student-led photography networking exhibition, where we
                showcased our work and had the invaluable chance to learn from
                industry professionals. Through these experiences, Capture@DIA
                has not only fostered a love for photography but has also built
                a strong community of aspiring photographers eager to grow and
                share their artistry.
              </GrayText>
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default AboutCaptureDIA;
