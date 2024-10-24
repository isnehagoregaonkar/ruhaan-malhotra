import React from "react";
import Top from "../../sections/Top/Top";
import AboutArtisac from "../../sections/About/AboutArtisac";
import Events from "../../sections/Events/Event";
import InstagramEmbed from "../../sections/Social/InstagramEmbed";
import Articles from "../../sections/Articles/Articles";
import TestimonialSection from "../../sections/Testimonials/Testimonials";
import ContactSection from "../../sections/Contact/Contact";
import Footer from "../../sections/Footer.jsx/Footer";
import Nav from "../../sections/Nav/Nav";

const Home = () => {
  return (
    <div className="bg-[#f1f5eb]">
      <Nav />
      <Top />
      <AboutArtisac />
      <Events />
      <InstagramEmbed />
      <Articles />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
