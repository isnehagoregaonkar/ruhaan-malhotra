import React from "react";

const FullScreenMap = () => {
  return (
    <div className="relative w-full h-fit">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462563.03264347074!2d54.897837496039834!3d25.075658414920024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai!5e0!3m2!1sen!2sae!4v1729093536950!5m2!1sen!2sae"
        className="absolute top-0 left-0 w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Dubai Map"
      ></iframe>
    </div>
  );
};

export default FullScreenMap;
