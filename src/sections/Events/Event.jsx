import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeadingTitle from "../../components/ui/Title/HeadingTitle";
import ScrollAnimation from "../../components/Animations/AnimationWrapper";

const Events = () => {
  const events = [
    {
      title: "Eco-Friendly Workshop",
      date: "October 20, 2024",
      description:
        "Join us for a hands-on workshop where participants will learn to create tote bags from recycled materials, promoting sustainability in our community.",
    },
    {
      title: "Pop Art Sketching Session",
      date: "November 15, 2024",
      description:
        "A creative session for children to express themselves through pop art sketching. Materials will be provided, and all skill levels are welcome!",
    },
    {
      title: "Sustainability Awareness Campaign",
      date: "December 10, 2024",
      description:
        "An initiative to raise awareness about sustainability practices. Join us for talks, activities, and more!",
    },
  ];

  // Reference for the container
  const ref = useRef(null);
  // Check if the component is in view
  const isInView = useInView(ref, { once: true });

  // Motion variants for animation
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <ScrollAnimation>
      <section
        ref={ref}
        className="flex flex-col gap-8 p-8 max-h-fit bg-center border rounded-3xl"
        style={{
          backgroundImage: `url('bg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex justify-center">
          <HeadingTitle subtitle="Meet Us At" title="Upcoming Events" />
        </div>
        <div className="flex flex-col md:flex-row justify-around gap-6 md:gap-4 px-2 md:px-4">
          {events.map((event, index) => (
            <div
              key={index}
              className={`w-full md:w-1/3 h-fit p-4 md:p-6 bg-white rounded-lg shadow-md 
            flex flex-col gap-2 
            ${index === 1 ? "md:mt-10" : "md:mt-0"}
            
            hover:bg-lime-50 hover:cursor-pointer
            hover:shadow-lg`}
              variants={variants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <h3 className="text-xl font-bold text-green-800">
                {event.title}
              </h3>
              <p className="text-sm text-gray-500">{event.date}</p>
              <p className="text-sm text-green-800">{event.description}</p>
            </div>
          ))}
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Events;
