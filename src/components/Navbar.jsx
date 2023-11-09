import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
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
    <header className="w-full flex items-center fixed top-0 px-20 py-6 bg-[#041125] text-white">
      <nav className="w-full flex items-center justify-between">
        <h2 className="text-[1.35rem] font-[700]">
          Crypto<span className="text-[#ef2b55] text-[1.57rem]">Trackr</span>
        </h2>
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
      </nav>
    </header>
  );
};

export default Navbar;
