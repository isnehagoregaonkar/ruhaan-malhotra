import React from "react";
import { motion } from "framer-motion";
import HeadingTitle from "../../components/ui/Title/HeadingTitle";

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

  return (
    <section
      className="flex flex-col gap-8 p-8 bg-custom-bg bg-cover max-h-fit bg-center border rounded-3xl"
      style={{ backgroundImage: 'url("/bg.png")' }}
    >
      <div className="flex justify-center">
        <HeadingTitle subtitle="Meet Us At" title="Upcoming Events" />
      </div>
      <div className="flex justify-around gap-4">
        {events.map((event, index) => (
          <div
            key={index}
            className={`w-1/3 h-fit p-6 m-4 bg-white rounded-lg shadow-md flex flex-col gap-2 ${
              index === 1 ? "mt-10" : "mt-0"
            } hover:bg-lime-50 hover:cursor-pointer`}
          >
            <h3 className="text-xl font-bold text-green-800">{event.title}</h3>
            <p className="text-sm text-gray-500">{event.date}</p>
            <p className="text-sm text-green-800">{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
