import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaPlay, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const reelsData = [
  {
    id: 1,
    url: "https://www.instagram.com/p/DTk0pc0j7s0/embed?hidecaption=true",
  },
  {
    id: 2,
    url: "https://www.instagram.com/p/DS7Wh1WD5Rl/embed?hidecaption=true",
  },
  {
    id: 3,
    url: "https://www.instagram.com/p/DSclDwdj2-g/embed?hidecaption=true",
  },
  {
    id: 4,
    url: "https://www.instagram.com/p/DTk0pc0j7s0/embed?hidecaption=true",
  },
  {
    id: 5,
    url: "https://www.instagram.com/p/DS7Wh1WD5Rl/embed?hidecaption=true",
  },
  {
    id: 6,
    url: "https://www.instagram.com/p/DSclDwdj2-g/embed?hidecaption=true",
  },
  {
    id: 7,
    url: "https://www.instagram.com/p/DTk0pc0j7s0/embed?hidecaption=true",
  },
  {
    id: 8,
    url: "https://www.instagram.com/p/DS7Wh1WD5Rl/embed?hidecaption=true",
  },
  {
    id: 9,
    url: "https://www.instagram.com/p/DSclDwdj2-g/embed?hidecaption=true",
  },
];

const CustomPrevArrow = ({ onClick, className }) => (
  <button
    onClick={onClick}
    className={`absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex flex-col items-center justify-center bg-white/80 hover:bg-white text-black rounded-full shadow-lg transition-all duration-300 ${
      className?.includes("slick-disabled")
        ? "opacity-0 pointer-events-none"
        : "opacity-100"
    }`}
    aria-label="Previous"
  >
    <FaChevronLeft className="text-lg md:text-xl pr-1" />
  </button>
);

const CustomNextArrow = ({ onClick, className }) => (
  <button
    onClick={onClick}
    className={`absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex flex-col items-center justify-center bg-white/80 hover:bg-white text-black rounded-full shadow-lg transition-all duration-300 ${
      className?.includes("slick-disabled")
        ? "opacity-0 pointer-events-none"
        : "opacity-100"
    }`}
    aria-label="Next"
  >
    <FaChevronRight className="text-lg md:text-xl pl-1" />
  </button>
);

const ReelsSection = () => {
  const [activeReel, setActiveReel] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "40px",
        },
      },
    ],
  };

  return (
    <section className="w-full flex justify-center md:py-16 py-8 max-w-[1400px] place-content-center mx-auto overflow-hidden">
      <div className="w-full flex flex-col gap-6 px-3 lg:px-12">
        <div className="flex flex-col gap-2 items-center justify-center mx-auto mb-6 text-center">
          <h2 className="font-[Bastoni] text-3xl md:text-4xl mt-2 tracking-wide uppercase">
            #Zaahi - INSPIRED BY YOU
          </h2>
          <p className="text-[14px] md:text-[15px] max-w-xl text-[#848484] text-center font-sans mt-2">
            See how our community styles their favorite pieces.
          </p>
        </div>

        <div className="w-full relative">
          <Slider {...settings} className="reels-slider slider-container">
            {reelsData.map((reel) => (
              <div key={reel.id} className="px-2 transition-all outline-none">
                <div
                  className="relative w-full aspect-[10/16] rounded-xl overflow-hidden group shadow-md cursor-pointer"
                  onClick={() => setActiveReel(reel)}
                >
                  <iframe
                    src={reel.url}
                    className="w-full h-full object-cover object-top absolute inset-0 pointer-events-none scale-110"
                    frameBorder="0"
                    scrolling="no"
                    title="Instagram Reel Preview"
                  ></iframe>

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center z-10">
                    <div className="w-12 h-12 rounded-full bg-white/40 backdrop-blur-sm flex items-center justify-center transition-transform group-hover:scale-110 opacity-0 group-hover:opacity-100">
                      <FaPlay className="text-white text-lg ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {activeReel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity">
          <div className="relative w-full max-w-[400px] h-[80vh] md:h-[650px] bg-white rounded-xl overflow-hidden shadow-2xl flex flex-col items-center justify-center">
            <button
              onClick={() => setActiveReel(null)}
              className="absolute top-4 right-4 z-50 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 flex items-center justify-center transition-colors shadow-lg cursor-pointer"
              title="Close"
            >
              <FaTimes className="text-white text-sm" />
            </button>

            <div className="w-full h-full bg-white flex items-center justify-center overflow-auto">
              <iframe
                src={`${activeReel.url}&autoplay=1`}
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                allow="autoplay; encrypted-media"
                className="w-full h-full border-none shadow-none"
                title="Instagram Reel"
              ></iframe>
            </div>
          </div>

          <div
            className="absolute inset-0 -z-10 cursor-pointer"
            onClick={() => setActiveReel(null)}
            aria-label="Close modal"
          ></div>
        </div>
      )}
    </section>
  );
};

export default ReelsSection;
