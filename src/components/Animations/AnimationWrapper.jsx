import React, { useEffect, useState, useRef } from "react";

const ScrollAnimation = ({ children, animationName = "fadeIn" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Adjust this value to trigger animations earlier/later
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 transform ${
        isVisible
          ? `${animationName} opacity-100 translate-y-0`
          : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
