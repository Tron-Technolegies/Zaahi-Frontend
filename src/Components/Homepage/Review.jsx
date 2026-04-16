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

  useEffect(() => {
    if (data && data.length > 0) {
      setActive(Math.floor(data.length / 2));

      const interval = setInterval(() => {
        setActive((prev) => (prev === data.length - 1 ? 0 : prev + 1));
      }, 2000);

      return () => clearInterval(interval);
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
      className="main-bg px-5 md:px-10 lg:px-30 xl:px-45 py-10 flex flex-col gap-5 items-center overflow-hidden"
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
        <div className="relative flex justify-center items-center h-150 perspective-distant ">
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
                <div className="w-87.5 h-112.5 rounded-sm backdrop-blur-xl bg-white/20 border border-white/30 shadow-xl p-4 flex flex-col items-center">
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
    </motion.section>
  );
}
