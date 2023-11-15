import { motion } from "framer-motion";
import bg from "../assets/images/bg.png";

const Hero = () => {
  return (
    <>
      <section className="h-screen pl-20 pr-8 w-full bg-[#041125] flex justify-center items-center text-white">
        <div className="w-full flex flex-col gap-8 pt-8">
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.5, delay: 0, ease: "easeInOut" }}
            className="text-[3.125rem] font-[600] leading-[4.1rem]">
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
            className="text-[1.5rem] font-[400] leading-[2.5rem]">
            Bringing You Comprehensive Crypto Information, Market Trends, and
            Pricing History.
          </motion.h2>
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
        </div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2, delay: 0.25, ease: "easeInOut" }}
          className="w-full flex justify-end pt-16">
          <img src={bg} alt="crypto image" width={550} />
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
