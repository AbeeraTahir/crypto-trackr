import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import bg from "../assets/images/bg.png";

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <section className="h-screen pl-8 md:pl-20 pr-8 w-full bg-[#041125] flex md:flex-row flex-col justify-center items-center text-white">
        <div className="w-full flex flex-col md:gap-8 gap-6 pt-16 md:pt-8">
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.5, delay: 0, ease: "easeInOut" }}
            className="text-[1.75rem] md:text-[3.125rem] font-[600] md:leading-[4.1rem]">
            Discover the World of Cryptocurrency
          </motion.h1>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.5, delay: 0.75, ease: "easeInOut" }}
            className="text-[0.95rem] md:text-[1.5rem] font-[400] leading-7 md:leading-[2.5rem]">
            Bringing You Comprehensive Crypto Information, Market Trends, and
            Pricing History.
          </motion.h2>
          <div className={windowWidth < 768 ? "hidden" : "visible"}>
            <a href="#crypto-stats">
              <motion.button
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1.5, delay: 1.25, ease: "easeInOut" }}
                className="btn">
                Get Started
              </motion.button>
            </a>
          </div>
        </div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
          className="md:min-w-[550px] min-w-[270px] flex justify-end pt-10 md:pt-16">
          <img src={bg} alt="crypto image" />
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
