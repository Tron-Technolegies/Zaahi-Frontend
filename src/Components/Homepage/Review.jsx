// import { motion, useInView } from "framer-motion";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { useEffect, useRef } from "react";
// import { useGetRandomReviews } from "../../hooks/review/useReview";
// import Loading from "../Loading";
// import ReviewCard from "./ReviewCard";

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   centerMode: true,
//   arrows: false,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   swipeToSlide: true,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// };
// export default function EventSection() {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, {
//     once: true,
//     margin: "-100px",
//   });
//   const { isError, isLoading, data } = useGetRandomReviews({
//     inView: isInView,
//   });
//   useEffect(() => {
//     import("slick-carousel/slick/slick.css");
//     import("slick-carousel/slick/slick-theme.css");
//   }, []);
//   const sectionVariants = {
//     hidden: { scale: 0.8, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//   };

//   return (
//     <motion.section
//       ref={sectionRef}
//       id="testimonials"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: false, amount: 0.2 }} // Triggers when 20% of the section is visible
//       variants={sectionVariants}
//       className="main-bg px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 flex flex-col gap-5 items-center"
//     >
//       <h3 className="font-[Bastoni] md:text-4xl text-3xl font-semibold pb-2">
//         Our Testimonials
//       </h3>
//       <p className="text-[#848484] text-[16px]">
//         Real feedback from real customers — helping you shop with confidence.
//       </p>

//       {/* Mobile: Show scroll hint */}
//       {/* <div className="block md:hidden text-xs text-[#A1D3F8] mb-2">
//         ← Swipe to explore events →
//       </div> */}
//       {isLoading ? (
//         <Loading />
//       ) : (
//         <div className="my-10 w-full [&_.slick-list]:mx-0 [&_.slick-slide]:px-2 [&_.slick-dots]:bottom-[-50px] [&_.slick-dots_li_button:before]:text-[#0194FE] [&_.slick-dots_li_button:before]:text-xs [&_.slick-dots_li.slick-active_button:before]:text-[#48E5E1] [&_.slick-track]:flex [&_.slick-track]:items-center [&_.slick-slide]:transition-transform [&_.slick-slide]:duration-300 [&_.slick-slide:active]:scale-[0.98]">
//           <Slider {...settings} className="w-full flex justify-center">
//             {data?.map((x) => (
//               <div key={x._id} className="px-2 focus:outline-none">
//                 <ReviewCard
//                   img={x.image.url}
//                   review={x.review}
//                   rating={x.rating}
//                   user={x.user.username}
//                 />
//               </div>
//             ))}
//           </Slider>
//         </div>
//       )}
//     </motion.section>
//   );
// }

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Loading from "../Loading";
import { useGetRandomReviews } from "../../hooks/review/useReview";
import { FaStar } from "react-icons/fa";

export default function Review() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });
  const sectionVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const { isError, isLoading, data } = useGetRandomReviews({
    inView: isInView,
  });

  const next = () => {
    setActive((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setActive((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (data) {
      setActive(Math.floor(data.length / 2));
    }
  }, [data]);
  return (
    <motion.section
      ref={sectionRef}
      id="testimonials"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} // Triggers when 20% of the section is visible
      variants={sectionVariants}
      className="main-bg px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 flex flex-col gap-5 items-center"
    >
      <h2 className="font-[Bastoni] md:text-4xl text-3xl font-semibold pb-2">
        Our Testimonials
      </h2>
      <p className="text-[#848484] text-[16px]">
        Our customers can’t stop talking about it, you’ll see why!
      </p>

      {/* Carousel */}
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <p>Something went wrong</p>
      ) : (
        <div className="relative flex justify-center items-center h-[600px] perspective-[1200px]">
          {data?.map((data, index) => {
            const offset = index - active;
            const abs = Math.abs(offset);

            const scale = offset === 0 ? 1 : 0.75;
            const rotateY = offset * -35;
            const x = offset * 360;
            const opacity = abs > 3 ? 0 : 1;
            const zIndex = data.length - abs;

            return (
              <motion.div
                key={index}
                className="absolute cursor-pointer"
                animate={{
                  x,
                  scale,
                  rotateY,
                  opacity,
                  zIndex,
                }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                onClick={() => setActive(index)}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="w-[350px] h-[450px] rounded-sm backdrop-blur-xl bg-white/20 border border-white/30 shadow-xl p-4 flex flex-col items-center">
                  <div className="bg-white p-2  shadow-md w-full h-[75%]">
                    <img
                      src={data.image?.url}
                      alt={data.review}
                      className="w-full h-full object-cover object-top rounded-xl"
                    />
                  </div>

                  <div className="flex flex-col gap-1 items-center w-full mt-2">
                    <p className=" text-amber-300 flex gap-3 items-center">
                      {data.rating} <FaStar />
                    </p>
                    <h4 className=" text-sm text-gray-400 italic font-semibold tracking-wide leading-tight flex-1">
                      {data.review.slice(0, 30)}.....
                    </h4>
                    <p className="text-sm self-end text-gray-600">
                      -{data.user?.username}
                    </p>

                    {/* Buttons */}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Buttons */}
      <div className="flex justify-center gap-2 mt-0">
        <button
          onClick={prev}
          className="px-6 py-2 rounded-full bg-white/30 backdrop-blur-md border border-white/40 text-[#246b75] hover:bg-[#D47784] hover:text-white transition-all shadow-lg"
        >
          Prev
        </button>

        <button
          onClick={next}
          className="px-6 py-2 rounded-full bg-white/30 backdrop-blur-md border border-white/40 text-[#246b75] hover:bg-[#D47784] hover:text-white transition-all shadow-lg"
        >
          Next
        </button>
      </div>
    </motion.section>
  );
}
