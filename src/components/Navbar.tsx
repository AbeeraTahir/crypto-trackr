import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

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
  ];

  const toggleMenuBar = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  return (
    <>
      <header className="w-full flex items-center text-white">
        <nav className="w-full flex items-center justify-between bg-[#041125] fixed top-0 z-20 px-8 md:px-20 py-4">
          <h2 className="text-[0.985rem] md:text-[1.35rem] font-[700]">
            Crypto
            <span className="text-[#ef2b55] text-[1.177rem] md:text-[1.57rem]">
              Trackr
            </span>
          </h2>
          {windowWidth < 768 ? (
            <div
              className="text-[1.35rem] cursor-pointer"
              onClick={toggleMenuBar}>
              {isMobileMenuActive ? <IoClose /> : <IoMenu />}
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
        <div
          className={`mobile-menu ${
            isMobileMenuActive ? "mobile-menu-show" : ""
          }`}>
          {isMobileMenuActive && (
            <ul className="flex flex-col items-start justify-center gap-4">
              {links.map((link) => (
                <li
                  key={link.id}
                  className="text-[0.975rem] md:text-[1rem]"
                  onClick={toggleMenuBar}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive ? "text-[#ef2b55]" : undefined
                    }>
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
