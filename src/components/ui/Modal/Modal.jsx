import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Modal = ({ isOpen, onClose, product }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    address: "",
    quantity: "",
  });
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, contact, quantity } = formData;

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
      user_phone: contact,
      message: "Product: " + product + "\nQuantity: " + quantity,
    };

    try {
      // Use EmailJS to send the email
      await emailjs.send(
        "service_l7xdj9h", // Replace with your EmailJS service ID
        "template_ecjqa88", // Replace with your EmailJS template ID
        templateParams,
        "UF4keqVPV1OLwaYv-" // Replace with your EmailJS user ID
      );

      setShowEmailMessage({
        showMessage: true,
        message: "Order placed successfully!",
        isError: false,
      });
      setEmailData({
        name: "",
        contact: "",
        email: "",
        address: "",
        quantity: "",
      });
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
    onClose();
    navigate("/success");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-green-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg w-[500px]">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold text-green-900">Order Form</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <IoMdClose color="red" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border rounded focus:outline-green-900"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              type="tel"
              placeholder="Contact"
              className="w-full p-2 border rounded focus:outline-green-900"
              value={formData.contact}
              onChange={(e) =>
                setFormData({ ...formData, contact: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded focus:outline-green-900"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Quantity"
              className="w-full p-2 border rounded focus:outline-green-900"
              value={formData.quantity}
              onChange={(e) =>
                setFormData({ ...formData, quantity: e.target.value })
              }
            />
            <textarea
              placeholder="Address"
              rows={4}
              className="w-full p-2 border rounded focus:outline-green-900"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-500 hover:text-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-900 text-white rounded-lg hover:bg-lime-500"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Confirming Order..." : "Confirm Order"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
