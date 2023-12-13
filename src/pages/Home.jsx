import { Link } from "react-router-dom";
import millify from "millify";
import { HashLoader } from "react-spinners";
import { useGetGlobalDataQuery } from "../services/cryptoApi";
import { Hero, CryptocurrencyList, Footer } from "../components";

const Home = () => {
  const { data, isFetching } = useGetGlobalDataQuery();
  const globalCryptoData = data?.data;

  const globalDataList = [
    {
      id: 1,
      title: "Active Currencies",
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

  if (isFetching) return <HashLoader color="#ef2b55" />;

  return (
    <>
      <Hero />
      <section className="md:px-16 py-16 flex flex-col gap-12 md:gap-16">
        <div className="px-6 flex flex-col gap-6">
          <h2 className="section-heading">Global Crypto Data</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-7 md:gap-0">
            {globalDataList.map(({ id, title, value }) => (
              <div
                key={id}
                className="w-[140px] md:w-full py-5 flex flex-col gap-3">
                <p className="text-[0.875rem] md:text-[1rem] opacity-80 overflow-hidden whitespace-nowrap text-ellipsis">
                  {title}
                </p>
                <p className="text-[1.5rem] md:text-[1.75rem]">
                  {millify(value)}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <h2 className="px-6 section-heading">
            Top 10 Cryptocurrencies in the World
          </h2>
          <div className="px-2">
            <CryptocurrencyList simplified />
          </div>
          <Link className="md:mr-0 mr-auto ml-auto" to="/cryptocurrencies">
            <button className="btn">Show more</button>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
