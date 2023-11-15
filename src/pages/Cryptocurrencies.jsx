import { useState } from "react";
import { CryptocurrencyList } from "../components";

const Cryptocurrencies = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section className="mt-[5rem] flex flex-col gap-10 p-16 items-center">
      <h2 className="section-heading">All Cryptocurrencies</h2>
      <input
        type="search"
        placeholder="Search Cryptocurrency"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 w-1/2 px-4 py-2 focus:outline-none"
      />
      <CryptocurrencyList searchTerm={searchTerm} />
    </section>
  );
};

export default Cryptocurrencies;
