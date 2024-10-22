import React, { useEffect } from "react";

const InstagramEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center py-10 bg-lime-500 ">
      <h2 className="text-3xl font-bold text-green-900 mb-6 text-center">
        Check Out Our Instagram!
      </h2>
      <p className="text-gray-700 mb-10 text-center max-w-lg">
        Follow us on Instagram for the latest updates, eco-friendly tips, and to
        see our newest Artisacs designs in action!
      </p>

      {/* Instagram Post Embed */}
      <div className="flex justify-center gap-12">
        <div
          className="w-1/3"
          dangerouslySetInnerHTML={{
            __html: `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/C9E7MB_PWna" data-instgrm-version="12" style="width:100%;"></blockquote>`,
          }}
        />
        <div
          className="w-1/3"
          dangerouslySetInnerHTML={{
            __html: `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/C6Gjls8vl3_/" data-instgrm-version="12" style="width:100%;"></blockquote>`,
          }}
        />
        <div
          className="w-1/3"
          dangerouslySetInnerHTML={{
            __html: `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/C3LdCjKN3-5" data-instgrm-version="12" style="width:100%;"></blockquote>`,
          }}
        />
      </div>

      <a
        href="https://www.instagram.com/artisacs"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 px-6 py-3 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white rounded-full font-semibold hover:bg-green-900 transition duration-300 shadow-lg"
      >
        Follow Us on Instagram
      </a>
    </section>
  );
};

export default InstagramEmbed;
