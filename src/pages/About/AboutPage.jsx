import React from "react";
import HeaderBanner from "../../components/ui/Header/HeaderBanner";
import AboutArtisac from "../../sections/About/AboutArtisac";

const AboutPage = () => {
  return (
    <div>
      <HeaderBanner />
      <AboutArtisac />
      <div className="bg-gray-100 py-10">
        {/* Main Content */}
        <main className="container mx-auto px-6 py-12 space-y-12">
          {/* Story Section */}
          <section className="bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-4">The Story of Artisacs</h2>
            <p className="text-gray-700 leading-relaxed">
              Artisacs was founded by Ruhaan Malhotra, a Year 12 student at
              Dubai International Academy Emirates Hills. His passion for both
              art and the environment led him to create a unique initiative that
              merges creativity with sustainability. Ruhaan’s love for sketching
              pop art started at age seven, and over time, his hobby evolved
              into a greater purpose—combating single-use plastic waste.
              Artisacs offers stylish, eco-friendly tote bags, each adorned with
              Ruhaan’s original designs, providing a creative and sustainable
              alternative to plastic bags.
            </p>
          </section>

          {/* Mission Section */}
          <section className="bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              Artisacs is dedicated to promoting sustainable living by offering
              practical, eco-friendly alternatives to plastic bags. Each tote
              bag is crafted from recycled materials, reducing waste and
              contributing to environmental conservation. Aligned with Dubai’s
              Year of Sustainability, Artisacs aims to raise awareness about the
              impact of plastic pollution and inspire others to embrace
              eco-friendly practices in their daily lives.
            </p>
          </section>

          {/* Sustainability & Community Impact Section */}
          <section className="bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-4">
              Sustainability & Community Impact
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Beyond sustainability, Artisacs has a philanthropic focus. All
              proceeds from the sale of Artisacs bags are dedicated to
              empowering underprivileged children by providing education and
              workshops on pop art and environmental awareness. These
              initiatives help foster creativity while highlighting the
              importance of reusing materials and reducing plastic waste.
              Ruhaan's work through Artisacs extends beyond art—it is a movement
              to create lasting change within the community.
            </p>
          </section>

          {/* Future Vision Section */}
          <section className="bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-4">The Future Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              Artisacs is committed to expanding its impact by partnering with
              environmental organizations and broadening its product offerings.
              The future holds more opportunities to inspire eco-conscious
              consumer behavior and promote sustainable practices worldwide.
              Ruhaan’s vision is to lead a global movement where art and
              sustainability go hand in hand, making eco-friendly living
              accessible and stylish for everyone.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AboutPage;
