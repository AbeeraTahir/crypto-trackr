import React from "react";
import bg from "../assets/images/bg.png";

const Hero = () => {
  return (
    <section className="h-screen pl-20 pr-8 w-full bg-[#041125] flex justify-center items-center text-white">
      <div className="w-full flex flex-col gap-8 pt-8">
        <h1 className="text-[3.125rem] font-[600] leading-[4.1rem]">
          Discover the World of Cryptocurrency
        </h1>
        <h2 className="text-[1.5rem] font-[400] leading-[2.5rem]">
          Bringing You Comprehensive Crypto Information, Market Trends, and
          Pricing History.
        </h2>
        <button className="w-[8.5rem] py-3 bg-[#ef2b55] rounded-md">
          Get Started
        </button>
      </div>
      <div className="w-full flex justify-end pt-16">
        <img src={bg} alt="crypto image" width={550} />
      </div>
    </section>
  );
};

export default Hero;
