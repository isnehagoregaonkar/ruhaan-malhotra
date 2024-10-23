import React from "react";
import HeaderBanner from "../../components/ui/Header/HeaderBanner";
import AboutArtisac from "../../sections/About/AboutArtisac";
import Nav from "../../sections/Nav/Nav";
import ContactSection from "../../sections/Contact/Contact";
import Footer from "../../sections/Footer.jsx/Footer";
import { gallery11, gallery6, ruhaan } from "../../assets/assets";
import HeadingTitle from "../../components/ui/Title/HeadingTitle";
import GrayText from "../../components/ui/Text/GrayText";
import FullWidthVideo from "../../components/ui/FullWidthVideo";

const AboutPage = () => {
  return (
    <div>
      <Nav />
      <HeaderBanner />
      <div className="py-10">
        {/* Main Content */}
        <main className="mx-auto p-8">
          {/* Story Section */}
          <section className="p-6">
            {/* <div className="flex justify-between gap-16">
              <div className="w-1/2">
                <div className="my-8">
                  <HeadingTitle title=" The Story of Artisacs" />
                </div>
                <p>
                  Artisacs was founded by Ruhaan Malhotra, a Year 12 student at
                  Dubai International Academy Emirates Hills. His passion for
                  both art and the environment led him to create a unique
                  initiative that merges creativity with sustainability.
                  Ruhaan’s love for sketching pop art started at age seven, and
                  over time, his hobby evolved into a greater purpose—combating
                  single-use plastic waste.
                </p>
                <p>
                  Artisacs offers stylish, eco-friendly tote bags, each adorned
                  with Ruhaan’s original designs, providing a creative and
                  sustainable alternative to plastic bags.
                </p>
                <p>
                  Artisacs is dedicated to promoting sustainable living by
                  offering practical, eco-friendly alternatives to plastic bags.
                  Each tote bag is crafted from recycled materials, reducing
                  waste and contributing to environmental conservation.
                </p>
                <p>
                  {" "}
                  Aligned with Dubai’s Year of Sustainability, Artisacs aims to
                  raise awareness about the impact of plastic pollution and
                  inspire others to embrace eco-friendly practices in their
                  daily lives.
                </p>
              </div>
              <div className="w-1/2">
                <img
                  src={ruhaan}
                  alt="Artisacs Story"
                  className="rounded-lg h-2/3 w-fit"
                />
              </div>
            </div> */}
            <FullWidthVideo />
          </section>

          <AboutArtisac />
        </main>
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default AboutPage;
