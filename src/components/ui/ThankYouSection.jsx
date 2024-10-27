import React from "react";
import { Heart, Sparkles, Leaf, Users } from "lucide-react";
import ScrollAnimation from "../Animations/AnimationWrapper";

const ThankYouSection = () => {
  const values = [
    { icon: Sparkles, text: "Creativity", color: "text-purple-500" },
    { icon: Leaf, text: "Sustainability", color: "text-green-500" },
    { icon: Users, text: "Community", color: "text-blue-500" },
  ];

  return (
    <ScrollAnimation>
      <div className="py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Thank You Header */}
          <div className="inline-flex items-center gap-2 bg-white px-6 py-2 rounded-full shadow-sm mb-8">
            <Heart className="h-5 w-5 text-red-500" />
            <span className="text-green-900 font-medium">Thank You Note</span>
          </div>

          {/* Main Message */}
          <h2 className="text-4xl font-bold text-green-900 mb-6">
            Thank you for being here!
          </h2>

          <p className="text-xl text-green-900 leading-relaxed mb-12">
            I look forward to continuing this journey together as we promote
          </p>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {values.map(({ icon: Icon, text, color }) => (
              <div
                key={text}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div
                    className={`p-3 rounded-full bg-opacity-10 ${color.replace(
                      "text",
                      "bg"
                    )}`}
                  >
                    <Icon className={`h-6 w-6 ${color}`} />
                  </div>
                </div>
                <h3 className={`text-xl font-semibold ${color}`}>{text}</h3>
              </div>
            ))}
          </div>

          {/* Decorative Elements */}
          <div className="relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="flex gap-2">
                <div className="w-1 h-1 rounded-full bg-green-200"></div>
                <div className="w-1 h-1 rounded-full bg-green-500"></div>
                <div className="w-1 h-1 rounded-full bg-green-800"></div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <button className="bg-green-900 text-white px-8 py-3 rounded-full hover:bg-lime-500 transition-colors inline-flex items-center gap-2">
            Let's Connect
            <Sparkles className="h-4 w-4" />
          </button>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default ThankYouSection;
