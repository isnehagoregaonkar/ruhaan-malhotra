import React from "react";

const FullWidthVideo = () => {
  return (
    <div className="relative w-full overflow-hidden pb-[56.25%]">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/6p-iMxh1NZk"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default FullWidthVideo;
