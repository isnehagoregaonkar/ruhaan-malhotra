import React from "react";
import Nav from "../../sections/Nav/Nav";
import HeaderBanner from "../../components/ui/Header/HeaderBanner";
import Footer from "../../sections/Footer.jsx/Footer";
import { ContactCard } from "../../components/ui/Card/ContactCard";

const SuccessPage = () => {
  return (
    <div>
      <Nav />
      <HeaderBanner title="Thank you for your order!" />
      <div className="h-1/2">
        <div className="text-center my-12">
          <h2 className="text-2xl font-bold text-green-900">
            Your order has been successfully placed.
          </h2>
          <p className="text-green-900">
            You will receive an email confirmation shortly.
          </p>
        </div>
      </div>

      <h2
        className="text-2xl font-bold text-green-900 text-center"
        id="contact"
      >
        Contact Us on below details
      </h2>
      <div className="flex flex-col md:flex-row mx-auto max-w-7xl p-4 md:p-8 justify-around gap-4 md:gap-8">
        <ContactCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          }
          title="Email"
          content="artisac@gmail.com"
        />
        <ContactCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          }
          title="Contact Number"
          content="+971 55 876 4168"
        />

        <ContactCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
          }
          title="Address"
          content="Dubai, UAE"
        />
      </div>
      <Footer />
    </div>
  );
};

export default SuccessPage;
