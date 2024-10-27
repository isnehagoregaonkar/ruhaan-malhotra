import React from "react";
import { product4, product5 } from "../../assets/assets";
import GrayText from "../../components/ui/Text/GrayText";
import HeadingTitle from "../../components/ui/Title/HeadingTitle";
import ScrollAnimation from "../../components/Animations/AnimationWrapper";

const ArtisacsInitiative = () => {
  return (
    <ScrollAnimation>
      <section className="px-4 md:px-8 lg:px-16 py-8">
        {/* Main container */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Text content - Full width on mobile, half on desktop */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="mb-4">
              <HeadingTitle
                title="Artisacs - Waste to Wonder!"
                subtitle="What is artisacs?"
              />
            </div>

            {/* Text paragraphs */}
            <div className="space-y-6">
              <GrayText>
                Artisacs, founded by Ruhaan Malhotra, champions sustainability
                through innovative design, transforming waste materials into
                artful, eco-friendly tote bags. Committed to Dubai's no-plastic
                initiative, Artisacs offers an impactful alternative that
                marries environmental consciousness with style, making
                sustainability accessible and practical.
              </GrayText>

              <GrayText>
                Each tote bag features Ruhaan's original pop art-inspired
                designs, combining bold visuals with a message of environmental
                responsibility. Beyond providing a sustainable alternative,
                Artisacs is a social enterprise—proceeds from each bag are
                directed to the Udyam Trust NGO in New Delhi, where Ruhaan
                personally spends his summers. There, he teaches underprivileged
                children pop art and self-expression, using art as a tool for
                empowerment and education. Through Artisacs, Ruhaan not only
                contributes to reducing plastic waste but also creates
                meaningful opportunities for youth in need, making a positive
                impact on both community and planet.
              </GrayText>
            </div>
          </div>

          {/* Image container - Full width on mobile, half on desktop */}
          <div className="w-full md:w-1/2">
            <div className="bg-lime-500 rounded-tr-3xl rounded-bl-3xl h-full">
              {/* Images container */}
              <div className="flex flex-row h-full">
                {/* First image */}
                <div className="w-3/5 relative h-[300px] md:h-[400px] lg:h-[500px]">
                  <img
                    src={product5}
                    alt="Artisac Initiative Primary"
                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition duration-500 ease-in-out"
                  />
                </div>
                {/* Second image */}
                <div className="w-2/5 relative h-[300px] md:h-[400px] lg:h-[500px]">
                  <img
                    src={product4}
                    alt="Artisac Initiative Secondary"
                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition duration-500 ease-in-out"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default ArtisacsInitiative;
