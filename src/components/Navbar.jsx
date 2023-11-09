import React from "react";

const Navbar = () => {
  return (
    <header className="w-full flex items-center fixed top-0 px-16 py-6 bg-[#041125] text-white">
      <nav className="w-full flex items-center justify-between">
        <h2 className="text-[1.35rem] font-[700]">
          Crypto<span className="text-[#ef2b55] text-[1.57rem]">Trackr</span>
        </h2>
        <ul className="flex items-center gap-8">
          <li>Home</li>
          <li>Cryptocurrencies</li>
          <li>News</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
