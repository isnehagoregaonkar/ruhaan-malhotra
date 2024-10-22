import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      title: "Sustainability Impact",
      description:
        "Artisacs promotes eco-friendly practices by using recycled materials in our tote bags, reducing waste and environmental pollution.",
    },
    {
      title: "Community Engagement",
      description:
        "We actively involve the community in our initiatives, fostering a sense of unity and collaboration for a better future.",
    },
    {
      title: "Artistic Expression",
      description:
        "Our workshops encourage children to explore their creativity through pop art sketching, helping them express their thoughts and emotions.",
    },
    {
      title: "Educational Opportunities",
      description:
        "We provide educational resources and mentorship to underprivileged children, empowering them with skills for a brighter future.",
    },
  ];

  return (
    <section className="bg-gray-100 p-6 my-10 rounded-lg shadow-lg">
      <motion.h2
        className="text-2xl font-bold text-center text-gray-800 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Features of Artisacs Initiative
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
