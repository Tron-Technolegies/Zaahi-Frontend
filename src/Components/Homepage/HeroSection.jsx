import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function HeroSection() {
  const images = [
    'url("/hero-1.webp")',
    'url("/hero-2.webp")',
    'url("/hero-3.webp")',
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const h1Controls = useAnimation();
  const spanControls = useAnimation();
  // Change background image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animateSequence = async () => {
      if (isInView) {
        // First, run the pop-up animation on the h1 when it comes into view
        await h1Controls.start({
          scale: 1,
          transition: { duration: 0.7, ease: "easeInOut" },
        });
      }
    };
    animateSequence();
  }, [isInView, h1Controls, spanControls]);
  const navigate = useNavigate();
  return (
    <section id="home" className="overflow-hidden">
      <div
        className=" fade-background relative h-screen bg-no-repeat bg-center  bg-cover flex flex-col justify-center items-center"
        style={{ backgroundImage: images[activeIndex] }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-full h-[40%] bg-linear-to-t from-black to-transparent"></div>
        <div className="relative flex flex-col gap-7 items-center">
          <motion.h1
            ref={ref}
            initial={{ scale: 0.4 }}
            animate={h1Controls}
            className="md:text-7xl text-3xl font-bold text-white flex flex-col gap-3 items-center text-center font-[Bastoni]"
          >
            <motion.span initial={{ rotateX: 0 }} animate={spanControls}>
              Elegance
            </motion.span>
            <span>
              Woven In <span className="text-[#D77C84]">Tradition</span>
            </span>
          </motion.h1>

          <motion.button
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1, backgroundColor: "#D77C84" }} // Change color on hover
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/collections")}
            transition={{ type: "spring", stiffness: 300 }} // Smooth animation
            className="bg-[#D77C84] px-4 py-2 rounded-lg text-white flex gap-2 items-center text-xl"
          >
            Explore Collections
          </motion.button>
        </div>
      </div>
    </section>
  );
}
