import React from "react";
import HeadingTitle from "../../components/ui/Title/HeadingTitle";
import {
  article1,
  article2,
  gallery2,
  gallery3,
  self1,
} from "../../assets/assets";

const Articles = () => {
  return (
    <section
      className="mx-auto px-16 py-6 text-center bg-custom-bg bg-cover max-h-fit bg-center border rounded-3xl"
      style={{ backgroundImage: 'url("/bg.png")' }}
    >
      <div className="my-8">
        <HeadingTitle
          subtitle={"They wrote about us"}
          title={"A Tapestry of Experiences"}
        />
      </div>
      <div className="flex gap-8 justify-around ">
        <div
          className="w-1/3"
          style={{
            perspective: "1000px",
          }}
        >
          <a
            href="https://gulfnews.com/gn-focus/dubai-student-designs-sustainable-bags-from-recycled-fabrics-1.1716540250529"
            target="_blank"
          >
            <img
              src={article2}
              className="h-[350px] w-full object-fill rounded-lg transform transition-transform duration-500 ease-out hover:rotate-x-12 hover:rotate-y-12 hover:scale-105 hover:shadow-2xl"
            />
            <div className="bg-white p-4 rounded-lg shadow-lg text-left -top-10 relative ml-10">
              <h1 className="text-xl font-semibold text-green-900 line-clamp-2">
                Dubai student designs sustainable bags from recycled fabrics
              </h1>
              <p className="text-gray-600 text-xs mt-2">
                Published: May 24, 2024 12:42
              </p>
              <p className="text-gray-600 text-sm mt-2  line-clamp-2">
                Ruhaan Malhotra, a Year 12 student at Dubai International
                Academy Emirates Hills and founder of Artisacs (@artisacs), is
                making waves with his innovative initiative that promotes
                sustainability through designing and sourcing eco-friendly tote
                bags made from recycled fabrics. Artisacs supports the wider
                community by providing education to underprivileged children on
                expressing themselves through pop art sketching and advocating
                for environmental awareness.
              </p>
            </div>
          </a>
        </div>
        <div className="w-1/3">
          <a
            href="https://gulfnews.com/gn-focus/dubai-international-academy-emirates-hills-student-contributes-to-sustainability-1.1717142245795"
            target="_blank"
          >
            <img
              src={article1}
              className="h-[350px] w-full object-fill rounded-lg transform transition-transform duration-500 ease-out hover:rotate-x-12 hover:rotate-y-12 hover:scale-105 hover:shadow-2xl"
            />
            <div className="bg-white p-4 rounded-lg shadow-lg text-left -top-10 relative ml-10">
              <h1 className="text-xl font-semibold text-green-900 line-clamp-2">
                Dubai International Academy Emirates Hills student contributes
                to sustainability Dubai student designs sustainable bags from
                recycled fabrics
              </h1>
              <p className="text-gray-600 text-xs mt-2">
                Published: May 31, 2024 11:53
              </p>
              <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                In a world increasingly aware of environmental issues, even the
                youngest among us are finding innovative ways to contribute. One
                such inspiring story comes from Ruhaan Malhotra, a Year 12
                student at Dubai International Academy Emirates Hills and
                founder of Artisacs (@artisacs). He is making waves with his
                innovative initiative that promotes sustainability through
                designing and sourcing sustainable tote bags made from recycled
                materials like cotton and eco-juco.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Articles;
