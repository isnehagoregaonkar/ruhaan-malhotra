import React, { useState } from "react";
import emailjs from "emailjs-com";

const HeadingTitle = ({ title, subtitle }) => (
  <div className="space-y-2 mb-6">
    <h3 className="text-gray-600 text-lg">{subtitle}</h3>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
  </div>
);

const ContactCard = ({ icon: Icon, title, content }) => (
  <div className="flex flex-col items-center mb-4 gap-2 justify-around border border-lime-500 rounded-2xl p-4 bg-white w-full md:w-1/3">
    <span className="bg-lime-500 rounded-full p-3">{Icon}</span>
    <p className="text-lg md:text-xl text-green-900 font-bold">{title}</p>
    <span className="text-sm text-gray-600">{content}</span>
  </div>
);

const PrimaryButton = ({ children, sendEmail }) => {
  return (
    <button
      onClick={sendEmail}
      type="submit"
      className="w-full md:w-auto px-6 py-3 bg-lime-500 text-white rounded-xl hover:bg-lime-600 transition-colors duration-200"
    >
      {children}
    </button>
  );
};

const ContactSection = () => {
  const [emailData, setEmailData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    // EmailJS service - replace with your own values
    emailjs
      .send("your_service_id", "your_template_id", emailData, "your_user_id")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Email sent successfully!");
        },
        (err) => {
          console.error("FAILED...", err);
          alert("Failed to send email. Please try again later.");
        }
      );
  };
  return (
    <section className="mx-auto py-6 md:py-10 px-4 md:px-8 lg:px-16 text-center bg-gray-50">
      <HeadingTitle subtitle="Contact Information" title="Get in Touch" />

      {/* Contact Cards Container */}
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

      {/* Contact Form Container */}
      <div className="flex justify-center px-4 md:px-8 lg:px-16">
        <div className="w-full md:w-2/3 lg:w-1/2 border border-lime-500 p-4 md:p-8 rounded-2xl bg-white">
          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Full Name"
              aria-label="Full Name"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lime-500"
            />
            <input
              type="email"
              placeholder="Email"
              aria-label="Email"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lime-500"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              aria-label="Phone Number"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lime-500"
            />
            <textarea
              rows={5}
              placeholder="Message"
              aria-label="Message"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lime-500"
            />
            <PrimaryButton sendEmail={sendEmail}>Send Message</PrimaryButton>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
