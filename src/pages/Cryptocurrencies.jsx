import { useState } from "react";
import { CryptocurrencyList, Footer } from "../components";
import search from "../assets/icons/search.png";

const Cryptocurrencies = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <section className="mt-[5rem] flex flex-col gap-10 p-16 items-center">
        <h2 className="section-heading">All Cryptocurrencies</h2>
        <div className="border border-gray-300 w-1/2 px-4 py-2 flex items-center gap-3">
          <img src={search} alt="search" className="opacity-40" width={20} />
          <input
            type="search"
            placeholder="Search Cryptocurrency"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="focus:outline-none"
          />
        </div>
        <CryptocurrencyList searchTerm={searchTerm} />
      </section>
      <Footer />
    </>
  );
};

export default Cryptocurrencies;
