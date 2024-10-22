import React from "react";

const HeadingTitle = ({ subtitle, title }) => {
  return (
    <div>
      <p className="uppercase text-green-900 font-medium">{subtitle}</p>
      <h2 className="text-5xl font-bold text-green-900">{title}</h2>
    </div>
  );
};

export default HeadingTitle;
