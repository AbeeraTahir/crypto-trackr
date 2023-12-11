import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
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

  const links = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/cryptocurrencies",
      text: "Cryptocurrencies",
    },
    {
      id: 3,
      path: "/news",
      text: "News",
    },
  ];
  return (
    <header className="w-full flex items-center fixed top-0 z-20 px-8 md:px-20 py-4 bg-[#041125] text-white">
      <nav className="w-full flex items-center justify-between">
        <h2 className="text-[0.925rem] md:text-[1.35rem] font-[700]">
          Crypto
          <span className="text-[#ef2b55] text-[1.127rem] md:text-[1.57rem]">
            Trackr
          </span>
        </h2>
        {windowWidth < 768 ? (
          <div className="text-[1.2rem] cursor-pointer">
            <IoMenu />
          </div>
        ) : (
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <motion.li
                whileHover={{
                  color: "#ef2b55",
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
                key={link.id}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? "text-[#ef2b55]" : undefined
                  }>
                  {link.text}
                </NavLink>
              </motion.li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
