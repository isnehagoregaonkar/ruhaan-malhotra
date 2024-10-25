import React from "react";
import HeaderBanner from "../../components/ui/Header/HeaderBanner";
import AboutArtisac from "../../sections/About/AboutArtisac";
import Nav from "../../sections/Nav/Nav";
import ContactSection from "../../sections/Contact/Contact";
import Footer from "../../sections/Footer.jsx/Footer";
import FullWidthVideo from "../../components/ui/FullWidthVideo";
import ScrollAnimation from "../../components/Animations/AnimationWrapper";

const AboutPage = () => {
  return (
    <div>
      <Nav />
      <HeaderBanner
        title="Welcome to Artisac"
        subtitle=" Discover our eco-friendly designs and innovative solutions to
          sustainable living."
      />
      <div className="py-10">
        {/* Main Content */}
        <main>
          {/* Story Section */}
          <section className="p-8">
            <ScrollAnimation>
              <FullWidthVideo />
            </ScrollAnimation>
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
