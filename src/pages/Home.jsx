import { Link } from "react-router-dom";
import millify from "millify";
import { useGetGlobalDataQuery } from "../services/cryptoApi";
import { Hero, CryptocurrencyList, Footer } from "../components";

const Home = () => {
  const { data, isFetching } = useGetGlobalDataQuery();
  const globalCryptoData = data?.data;

  const globalDataList = [
    {
      id: 1,
      title: "Active Cryptocurrencies",
      value: globalCryptoData?.active_cryptocurrencies,
    },
    {
      id: 2,
      title: "Ended ICOs",
      value: globalCryptoData?.ended_icos,
    },
    {
      id: 3,
      title: "Ongoing ICOs",
      value: globalCryptoData?.ongoing_icos,
    },
    {
      id: 4,
      title: "Upcoming ICOs",
      value: globalCryptoData?.upcoming_icos,
    },
    {
      id: 5,
      title: "Total Markets",
      value: globalCryptoData?.markets,
    },
    {
      id: 6,
      title: "24h Market Cap Change %",
      value: globalCryptoData?.market_cap_change_percentage_24h_usd,
    },
  ];

  if (isFetching) return "Loading...";

  return (
    <>
      <Hero />
      <section className="px-20 py-16 flex flex-col gap-16">
        <div className="flex flex-col gap-6">
          <h2 className="section-heading">Global Crypto Data</h2>
          <div className="w-full flex flex-wrap">
            {globalDataList.map(({ id, title, value }) => (
              <div key={id} className="w-1/3 py-5 flex flex-col gap-3">
                <p className="opacity-80">{title}</p>
                <p className="text-[1.75rem] font-[6500]">{millify(value)}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <h2 className="section-heading">
            Top 10 Cryptocurrencies in the World
          </h2>
          <CryptocurrencyList simplified />
          <Link className="mr-0 ml-auto" to="/cryptocurrencies">
            <button className="btn">Show more</button>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
