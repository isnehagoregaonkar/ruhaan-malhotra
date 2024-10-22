import React from "react";
import HeadingTitle from "../../components/ui/Title/HeadingTitle";
import { article1, article2 } from "../../assets/assets";

const Articles = () => {
  const articles = [
    {
      image: article1,
      title: "Dubai student designs sustainable bags from recycled fabrics",
      date: "Published: May 24, 2024 12:42",
      content:
        "Ruhaan Malhotra, a Year 12 student at Dubai International Academy Emirates Hills and founder of Artisacs (@artisacs), is making waves with his innovative initiative that promotes sustainability through designing and sourcing eco-friendly tote bags made from recycled fabrics. Artisacs supports the wider community by providing education to underprivileged children on expressing themselves through pop art sketching and advocating for environmental awareness.",
      link: "https://gulfnews.com/gn-focus/dubai-student-designs-sustainable-bags-from-recycled-fabrics-1.1716540250529",
    },
    {
      image: article2,
      title:
        "Dubai International Academy Emirates Hills student contributes to sustainability Dubai student designs sustainable bags from recycled fabrics",
      date: "Published: May 31, 2024 11:53",
      content:
        "In a world increasingly aware of environmental issues, even the youngest among us are finding innovative ways to contribute. One such inspiring story comes from Ruhaan Malhotra, a Year 12 student at Dubai International Academy Emirates Hills and founder of Artisacs (@artisacs). He is making waves with his innovative initiative that promotes sustainability through designing and sourcing sustainable tote bags made from recycled materials like cotton and eco-juco.",
      link: "https://gulfnews.com/gn-focus/dubai-international-academy-emirates-hills-student-contributes-to-sustainability-1.1717142245795",
    },
  ];
  return (
    <section className="px-4 md:px-8 lg:px-16 py-6 text-center max-h-fit bg-white">
      <div className="my-8">
        <HeadingTitle
          subtitle={"They wrote about us"}
          title={"A Tapestry of Experiences"}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-around">
        {articles.map((article, index) => (
          <div
            key={index}
            className="w-full md:w-1/2 lg:w-1/3 group"
            style={{
              perspective: "1000px",
            }}
          >
            <a href={article.link} target="_blank" className="block">
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-[350px] w-full object-cover rounded-lg transform transition-transform duration-500 ease-out group-hover:rotate-x-12 group-hover:rotate-y-12 group-hover:scale-105 group-hover:shadow-2xl"
                />
                <div className="bg-white p-4 rounded-lg shadow-lg text-left relative -mt-10 mx-4 md:ml-10">
                  <h1 className="text-lg md:text-xl font-semibold text-green-900 line-clamp-2">
                    {article.title}
                  </h1>
                  <p className="text-gray-600 text-xs mt-2">{article.date}</p>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                    {article.content}
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles;
