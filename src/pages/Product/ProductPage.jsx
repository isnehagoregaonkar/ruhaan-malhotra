import React, { useState } from "react";
import Nav from "../../sections/Nav/Nav";
import HeaderBanner from "../../components/ui/Header/HeaderBanner";
import ContactSection from "../../sections/Contact/Contact";
import Footer from "../../sections/Footer.jsx/Footer";
import {
  product1,
  product2,
  product3,
  product4,
  product5,
} from "../../assets/assets";
import ScrollAnimation from "../../components/Animations/AnimationWrapper";
import Modal from "../../components/ui/Modal/Modal";

// Example product data including images
const products = [
  {
    id: 1,
    name: "Eco-Friendly Sac Bag",
    price: 20,
    bestseller: true,
    image: product1, // Assuming you have images hosted in the /public/images/ directory
  },
  {
    id: 2,
    name: "Eco-Friendly Backpack Bag",
    price: 20,
    bestseller: false,
    image: product2,
  },
  {
    id: 3,
    name: "Eco-Friendly Tote Bag",
    price: 20,
    bestseller: true,
    image: product3,
  },
  {
    id: 4,
    name: "Eco-Friendly Tote Bag",
    price: 20,
    bestseller: false,
    image: product4,
  },
  {
    id: 5,
    name: "Eco-Friendly Tote Bag",
    price: 20,
    bestseller: false,
    image: product5,
  },
];

const ProductPage = () => {
  const [selectedProduct, setSelectedProduct] = useState();

  const [showForm, setShowForm] = useState(false);

  // Open form for selected product
  const handleOrderClick = (product) => {
    console.log(product);
    setSelectedProduct(product.name);
    setShowForm(true);
  };

  return (
    <div>
      <Nav />
      <HeaderBanner
        title="Products"
        subtitle="Our diverse range of eco-friendly products are designed to help you live sustainably."
      />
      <ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 m-16 px-18">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl p-4 bg-white shadow-xl"
            >
              {/* Display product image */}
              <div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-52 object-contain mb-4 rounded-lg hover:border hover:border-green-900 bg-gray-50 hover:scale-105 transition duration-500 ease-in-out"
                />
                {product.bestseller && (
                  <span className="absolute text-sm bg-yellow-300 rounded-2xl px-2 py-1 top-2">
                    Bestseller
                  </span>
                )}
              </div>
              <h2 className="text-xl font-semibold text-green-900">
                {product.name}
              </h2>
              <p className="text-sm text-green-900">
                {/* Price: AED {product.price} */}
              </p>

              <button
                className="mt-4 w-full bg-green-900 text-white px-4 py-2 rounded-lg hover:bg-lime-500"
                onClick={() => handleOrderClick(product)}
              >
                Place Order
              </button>
            </div>
          ))}
        </div>
      </ScrollAnimation>

      {/* Order Form Modal */}
      {showForm && (
        <Modal
          isOpen={showForm}
          onClose={() => setShowForm(false)}
          product={selectedProduct}
        />
      )}
      <ContactSection />
      <Footer />
    </div>
  );
};

export default ProductPage;
