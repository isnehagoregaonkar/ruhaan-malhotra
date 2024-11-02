import React, { useState, useEffect } from "react";
import ScrollAnimation from "../../components/Animations/AnimationWrapper";
import HeadingTitle from "../../components/ui/Title/HeadingTitle";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";

const PrimaryButton = ({ children, disabled }) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`w-full md:w-auto px-6 py-3 ${
        disabled ? "bg-gray-400" : "bg-lime-500 hover:bg-lime-600"
      } text-white rounded-xl transition-colors duration-200`}
    >
      {children}
    </button>
  );
};

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showEmailMessage, setShowEmailMessage] = useState({
    showMessage: false,
    message: "",
    isError: false,
  });
  const [emailData, setEmailData] = useState({
    name: "",
    email: "",
    phoneno: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, phoneno, message } = emailData;

    // Basic email validation
    if (!validateEmail(email)) {
      setShowEmailMessage({
        showMessage: true,
        message: "Please enter a valid email address.",
        isError: true,
      });
      setIsSubmitting(false);
      return;
    }

    // Parameters for EmailJS template
    const templateParams = {
      user_name: name,
      user_email: email,
      user_phone: phoneno,
      message: message,
    };

    try {
      // Use EmailJS to send the email
      await emailjs.send(
        "service_l7xdj9h", // Replace with your EmailJS service ID
        "template_ovlkgj9", // Replace with your EmailJS template ID
        templateParams,
        "UF4keqVPV1OLwaYv-" // Replace with your EmailJS user ID
      );

      setShowEmailMessage({
        showMessage: true,
        message: "Email sent successfully!",
        isError: false,
      });
      setEmailData({ name: "", email: "", phoneno: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setShowEmailMessage({
        showMessage: true,
        message: "Failed to send email. Please try again later.",
        isError: true,
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setShowEmailMessage({
          showMessage: false,
          message: "",
          isError: false,
        });
      }, 5000);
    }
  };

  return (
    <section
      className="mx-auto py-6 md:py-10 px-4 md:px-8 lg:px-16 text-center"
      id="contact"
      style={{
        backgroundImage: `url('bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <ScrollAnimation>
        <HeadingTitle subtitle="Contact Information" title="Get in Touch" />

        {/* Contact Cards Container */}
        <div className="flex mx-28 p-8 justify-around gap-20">
          <div className="flex flex-col items-center mb-4 gap-2 justify-around border border-lime-500 rounded-2xl p-4 w-1/3 bg-white">
            <span className="bg-lime-500 rounded-full">
              <FaEnvelope className="text-white text-[8px] p-4 h-14 w-14 hover:animate-shake" />
            </span>
            <p className="text-xl text-green-900 font-bold">Email</p>
            <span className="text-sm text-green-900">contact@artisacs.org</span>
          </div>

          <div className="flex flex-col items-center mb-4 gap-2 justify-around border border-lime-500 rounded-2xl p-4 w-1/3 bg-white">
            <span className="bg-lime-500 rounded-full">
              <FaPhoneAlt className="text-white text-[8px] p-4 h-14 w-14 hover:animate-shake" />
            </span>
            <p className="text-xl text-green-900 font-bold">Contact Number</p>
            <span className="text-sm">+971 55 876 4168</span>
          </div>

          <div className="flex flex-col items-center mb-4 gap-2 justify-around border border-lime-500 rounded-2xl p-4 w-1/3 bg-white">
            <span className="bg-lime-500 rounded-full">
              <FaMapMarkerAlt className="text-white text-[8px] p-4 h-14 w-14 hover:animate-shake" />
            </span>
            <p className="text-xl text-green-900 font-bold">Address</p>
            <span className="text-sm">Dubai, UAE</span>
          </div>
        </div>

        {/* Contact Form Container */}
        <div className="flex justify-center px-4 md:px-8 lg:px-16">
          <div className="w-full md:w-2/3 lg:w-1/2 border border-lime-500 p-4 md:p-8 rounded-2xl bg-white">
            <form className="flex flex-col gap-3" onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={emailData.name}
                onChange={handleChange}
                aria-label="Full Name"
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lime-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={emailData.email}
                onChange={handleChange}
                aria-label="Email"
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lime-500"
                required
              />
              <input
                type="tel"
                name="phoneno"
                placeholder="Phone Number"
                value={emailData.phoneno}
                onChange={handleChange}
                aria-label="Phone Number"
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lime-500"
                required
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Message"
                value={emailData.message}
                onChange={handleChange}
                aria-label="Message"
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-1 focus:ring-lime-500"
                required
              />
              <PrimaryButton disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </PrimaryButton>

              {/* Message Div */}
              {showEmailMessage.showMessage && (
                <div
                  className={`border p-4 rounded-2xl ${
                    showEmailMessage.isError
                      ? "border-red-500 bg-red-50"
                      : "border-lime-500 bg-lime-50"
                  }`}
                >
                  <p
                    className={`text-center ${
                      showEmailMessage.isError
                        ? "text-red-500 bg-red-50"
                        : "text-lime-500 bg-lime-50"
                    }`}
                  >
                    {showEmailMessage.message}
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default ContactSection;
