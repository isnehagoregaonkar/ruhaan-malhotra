import React, { useEffect } from "react";

const InstagramEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    const linkedInScript = document.createElement("script");
    linkedInScript.src = "https://platform.linkedin.com/badges/js/profile.js";
    linkedInScript.async = true;
    document.body.appendChild(linkedInScript);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center py-10 bg-gradient-to-b from-lime-500 to-lime-400">
      <h2 className="text-3xl font-bold text-green-900 mb-6 text-center">
        Our Social Media Feed
      </h2>
      <p className="text-gray-700 mb-10 text-center max-w-lg px-4">
        Stay connected with us across platforms! Check out our latest updates on
        Instagram and LinkedIn.
      </p>

      <div className="flex flex-col md:flex-row gap-8 p-4 w-full max-w-6xl">
        {/* First Instagram Post with its button */}
        <div className="flex flex-col w-full md:w-1/3">
          <div
            dangerouslySetInnerHTML={{
              __html: `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/C9E7MB_PWna" data-instgrm-version="12" style="width:100%;"></blockquote>`,
            }}
          />
          <a
            href="https://www.instagram.com/artisacs"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:hidden px-6 py-3 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white rounded-full font-semibold hover:opacity-90 transition duration-300 shadow-lg text-center"
          >
            Follow on Instagram
          </a>
        </div>

        {/* LinkedIn Post with its button */}
        <div className="flex flex-col w-full md:w-1/3">
          <div
            className="relative overflow-hidden rounded-lg shadow-lg bg-white instagram-media"
            style={{
              minWidth: "326px",
              minHeight: "595px",
            }}
          >
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7175559400936378370"
              width="100%"
              height="100%"
              className="absolute top-0 left-0 w-full h-full border-none"
              title="Embedded LinkedIn Post"
              allowFullScreen
            />
          </div>
          <a
            href="https://www.linkedin.com/company/artisacs"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:hidden px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition duration-300 shadow-lg text-center"
          >
            Connect on LinkedIn
          </a>
        </div>

        {/* Second Instagram Post with its button */}
        <div className="flex flex-col w-full md:w-1/3">
          <div
            dangerouslySetInnerHTML={{
              __html: `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/C6Gjls8vl3_/" data-instgrm-version="12" style="width:100%;"></blockquote>`,
            }}
          />
          <a
            href="https://www.instagram.com/artisacs"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:hidden px-6 py-3 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white rounded-full font-semibold hover:opacity-90 transition duration-300 shadow-lg text-center"
          >
            Follow on Instagram
          </a>
        </div>
      </div>

      {/* Desktop buttons */}
      <div className="hidden md:flex flex-row gap-4 mt-8">
        <a
          href="https://www.instagram.com/artisacs"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white rounded-full font-semibold hover:opacity-90 transition duration-300 shadow-lg"
        >
          Follow on Instagram
        </a>
        <a
          href="https://www.linkedin.com/company/artisacs"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition duration-300 shadow-lg"
        >
          Connect on LinkedIn
        </a>
      </div>
    </section>
  );
};

export default InstagramEmbed;
