import React from "react";
import HeadingTitle from "../../components/ui/Title/HeadingTitle";
import GrayText from "../../components/ui/Text/GrayText";
import PrimaryButton from "../../components/ui/Button/PrimaryButton";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      className="mx-auto py-10 px-4 text-center"
      style={{
        backgroundImage: `url('bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <HeadingTitle subtitle="Contact Information" title="Get in Touch" />
      <GrayText />
      <div className="flex mx-28 p-8 justify-around gap-20">
        <div className="flex flex-col items-center mb-4 gap-2 justify-around border border-lime-500 rounded-2xl p-4 w-1/3 bg-white">
          <span className=" bg-lime-500 rounded-full">
            <FaEnvelope className="text-white text-[8px] p-4 h-14 w-14" />
          </span>
          <p className="text-xl text-green-900 font-bold">Email</p>
          <span className="text-sm text-green-900">contact@example.com</span>
        </div>

        <div className="flex flex-col items-center mb-4 gap-2 justify-around border border-lime-500 rounded-2xl p-4 w-1/3 bg-white">
          <span className=" bg-lime-500 rounded-full">
            <FaPhoneAlt className="text-white text-[8px] p-4 h-14 w-14" />
          </span>
          <p className="text-xl text-green-900 font-bold">Contact Number</p>
          <span className="text-sm">+123 456 7890</span>
        </div>

        <div className="flex flex-col items-center mb-4 gap-2 justify-around border border-lime-500 rounded-2xl p-4 w-1/3 bg-white">
          <span className="bg-lime-500 rounded-full">
            <FaMapMarkerAlt className="text-white text-[8px] p-4 h-14 w-14" />
          </span>
          <p className="text-xl text-green-900 font-bold">Address</p>
          <span className="text-sm">123 Street, City, Country</span>
        </div>
      </div>
      <div className="flex gap-16 justify-center ">
        <div className="w-1/2 border border-lime-500 p-8 rounded-2xl bg-white">
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Full Name"
              aria-label="Full Name"
              className="w-full p-3 my-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lime-500"
            />
            <input
              type="text"
              placeholder="Email"
              aria-label="Email"
              className="w-full p-3 my-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lime-500"
            />
            <input
              type="text"
              placeholder="Phone Number"
              aria-label="Phone Number"
              className="w-full p-3 my-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lime-500"
            />
            <textarea
              type="text"
              rows={5}
              placeholder="Message"
              aria-label="Message"
              className="w-full p-3 my-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lime-500"
            />
            <PrimaryButton> Send Message</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
