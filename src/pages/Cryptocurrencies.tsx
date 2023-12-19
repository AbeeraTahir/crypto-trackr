import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import millify from "millify";
import { Loader, Error } from "../components";
import { useGetCryptosQuery } from "../services/cryptoApi";
import search from "../assets/icons/search.png";

export interface SimplifyProps {
  simplified?: boolean
}

interface Crypto {
  uuid: string;
  name: string;
  rank: number;
  iconUrl: string;
  price: number;
  marketCap: number;
  change: number;
};

const Cryptocurrencies = ({ simplified }: SimplifyProps) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching, error } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState<Crypto[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item: { name: string; }) =>
      item.name.toLowerCase().includes(searchTerm)
    );

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return <Loader />

  if (error) return <Error errorMsg={error?.data?.message} />

  return (
    <section
      className={`${
        !simplified
          ? "mt-[5rem] flex flex-col gap-10 px-2 py-8 md:p-16 items-center"
          : ""
      }`}>
      {!simplified && (
        <>
          <h2 className="section-heading">All Cryptocurrencies</h2>
          <div className="border border-gray-300 w-full md:w-1/2 px-4 py-2 flex items-center gap-4 rounded-md">
            <img src={search} alt="search" className="opacity-40" width={20} />
            <input
              type="search"
              placeholder="Search Cryptocurrency"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="focus:outline-none text-[0.825rem] md:text-[1rem] w-full"
            />
          </div>
        </>
      )}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4">
        {cryptos && cryptos.length > 0 ? (
          <>
            {cryptos?.map((currency) => (
              <div
                className="w-full md:w-[225px] border rounded-md hover:shadow-lg transition-all transform ease-in-out duration-300"
                key={currency.uuid}>
                <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
                  <div className="flex flex-col">
                    <div className="flex justify-between items-center border-b px-4 py-2">
                      <h2 className="text-[0.875rem] md:text-[1rem] font-[600]">{`${currency.rank}. ${currency.name}`}</h2>
                      <img
                        className="w-[35px]"
                        src={currency.iconUrl}
                        alt={currency.name}
                      />
                    </div>
                    <div className="flex flex-col gap-2 p-4 text-[0.75rem] md:text-[0.9rem]">
                      <p>Price: ${millify(currency.price)}</p>
                      <p>Market Cap: {millify(currency.marketCap)}</p>
                      <p>Daily Change: {currency.change}%</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </>
        ) : (
          <p className="text-center">No result found!</p>
        )}
      </div>
    </section>
  );
};

export default Cryptocurrencies;
