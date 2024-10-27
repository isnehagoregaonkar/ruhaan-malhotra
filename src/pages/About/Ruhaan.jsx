import React from "react";
import Nav from "../../sections/Nav/Nav";
import HeaderBanner from "../../components/ui/Header/HeaderBanner";
import Footer from "../../sections/Footer.jsx/Footer";
import AboutRuhaan from "../../sections/About/AboutRuhaan";
import AboutDiapair from "../../sections/About/AboutDiapair";
import AboutCaptureDIA from "../../sections/About/AboutCaptureDIA";
import ThankYouSection from "../../components/ui/ThankYouSection";
import Articles from "../../sections/Articles/Articles";

const Ruhaan = () => {
  return (
    <div>
      <Nav />
      <HeaderBanner title="Other Initiatives" />
      <AboutRuhaan />
      <AboutDiapair />
      <AboutCaptureDIA />
      <Articles />
      <ThankYouSection />
      <Footer />
    </div>
  );
};

export default Ruhaan;
