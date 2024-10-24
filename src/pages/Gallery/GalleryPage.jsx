import React from "react";
import ImageGallery from "../../sections/Gallery/Gallery";
import Nav from "../../sections/Nav/Nav";
import HeaderBanner from "../../components/ui/Header/HeaderBanner";
import Footer from "../../sections/Footer.jsx/Footer";

const GalleryPage = () => {
  return (
    <div>
      <Nav />
      <HeaderBanner title="Gallery" />
      <ImageGallery />
      <Footer />
    </div>
  );
};

export default GalleryPage;
