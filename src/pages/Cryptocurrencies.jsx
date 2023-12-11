import { useState } from "react";
import { CryptocurrencyList, Footer } from "../components";
import search from "../assets/icons/search.png";

const Cryptocurrencies = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <section className="mt-[5rem] flex flex-col gap-10 px-2 py-8 md:p-16 items-center">
        <h2 className="section-heading">All Cryptocurrencies</h2>
        <div className="border border-gray-300 w-[280px] md:w-1/2 px-4 py-2 flex items-center gap-4 rounded-md">
          <img src={search} alt="search" className="opacity-40" width={20} />
          <input
            type="search"
            placeholder="Search Cryptocurrency"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="focus:outline-none text-[0.825rem] md:text-[1rem] w-full"
          />
        </div>
        <CryptocurrencyList searchTerm={searchTerm} />
      </section>
      <Footer />
    </>
  );
};

export default Cryptocurrencies;
