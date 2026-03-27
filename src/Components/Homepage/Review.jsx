import { motion, useInView } from "framer-motion";
import Slider from "react-slick";

import { useEffect, useRef } from "react";
import { useGetRandomReviews } from "../../hooks/review/useReview";
import Loading from "../Loading";
import ReviewCard from "./ReviewCard";

const settings = {
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  swipeToSlide: true,
  touchMove: true,
  draggable: true,
  touchThreshold: 10,
  swipe: true,
  useCSS: true,
  useTransform: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        infinite: true,
        swipeToSlide: true,
        touchMove: true,
        draggable: true,
        swipe: true,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        infinite: true,
        swipeToSlide: true,
        touchMove: true,
        draggable: true,
        swipe: true,
        variableWidth: false,
        touchThreshold: 5,
      },
    },
  ],
};

export default function EventSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });
  const { isError, isLoading, data } = useGetRandomReviews({
    inView: isInView,
  });
  useEffect(() => {
    import("slick-carousel/slick/slick.css");
    import("slick-carousel/slick/slick-theme.css");
  }, []);
  const sectionVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

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
      <h3 className="font-[Bastoni] md:text-4xl text-3xl font-semibold pb-2">
        Our Testimonials
      </h3>
      <p className="text-[#848484] text-[16px]">
        Real feedback from real customers — helping you shop with confidence.
      </p>

      {/* Mobile: Show scroll hint */}
      {/* <div className="block md:hidden text-xs text-[#A1D3F8] mb-2">
        ← Swipe to explore events →
      </div> */}
      {isLoading ? (
        <Loading />
      ) : (
        <div className="my-10 w-full [&_.slick-list]:mx-0 [&_.slick-slide]:px-2 [&_.slick-dots]:bottom-[-50px] [&_.slick-dots_li_button:before]:text-[#0194FE] [&_.slick-dots_li_button:before]:text-xs [&_.slick-dots_li.slick-active_button:before]:text-[#48E5E1] [&_.slick-track]:flex [&_.slick-track]:items-center [&_.slick-slide]:transition-transform [&_.slick-slide]:duration-300 [&_.slick-slide:active]:scale-[0.98]">
          <Slider {...settings}>
            {data?.map((x) => (
              <div key={x._id} className="px-2 focus:outline-none">
                <ReviewCard
                  img={x.image.url}
                  review={x.review}
                  rating={x.rating}
                  user={x.user.username}
                />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </motion.section>
  );
}
