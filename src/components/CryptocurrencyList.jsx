import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import millify from "millify";
import { HashLoader } from "react-spinners";
import { useGetCoinsDataQuery } from "../services/cryptoApi";

const CryptocurrencyList = ({ simplified, searchTerm = "" }) => {
  const { data, isFetching } = useGetCoinsDataQuery();
  const [cryptos, setCryptos] = useState();

  useEffect(() => {
    if (data) setCryptos(data);

    const filteredData = data?.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );

    setCryptos(filteredData);
  }, [data, searchTerm]);

  if (isFetching) return <HashLoader color="#ef2b55" />;

  const displayedCoins = simplified ? cryptos?.slice(0, 10) : cryptos;

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4">
      {displayedCoins?.map((coin) => (
        <div
          className="w-full md:w-[225px] border rounded-md hover:shadow-lg transition-all transform ease-in-out duration-300"
          key={coin.id}>
          <Link key={coin.id} to={`/crypto/${coin.id}`}>
            <div className="flex flex-col">
              <div className="flex justify-between items-center border-b px-4 py-2">
                <h2 className="font-[600]">{`${coin.market_cap_rank}. ${coin.name}`}</h2>
                <img className="w-[35px]" src={coin.image} alt={coin.name} />
              </div>
              <div className="flex flex-col gap-2 p-4 text-[0.9rem]">
                <p>Price: {millify(coin.current_price)}</p>
                <p>Market Cap: {millify(coin.market_cap)}</p>
                <p>Total Volume: {millify(coin.total_volume)}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CryptocurrencyList;
