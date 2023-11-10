import { motion } from "framer-motion";
import millify from "millify";
import bg from "../assets/images/bg.png";
import { useGetGlobalDataQuery } from "../services/cryptoApi";

const Home = () => {
  const { data, isFetching } = useGetGlobalDataQuery();
  const globalCryptoData = data?.data;

  console.log(globalCryptoData);

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
      title: "Ongoing ICOS",
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
      <section className="h-screen pl-20 pr-8 w-full bg-[#041125] flex justify-center items-center text-white">
        <div className="w-full flex flex-col gap-8 pt-8">
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.5, delay: 0, ease: "easeInOut" }}
            className="text-[3.125rem] font-[600] leading-[4.1rem]">
            Discover the World of Cryptocurrency
          </motion.h1>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.5, delay: 0.75, ease: "easeInOut" }}
            className="text-[1.5rem] font-[400] leading-[2.5rem]">
            Bringing You Comprehensive Crypto Information, Market Trends, and
            Pricing History.
          </motion.h2>
          <motion.button
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.5, delay: 1.25, ease: "easeInOut" }}
            className="w-[8.5rem] py-3 bg-[#ef2b55] rounded-md">
            Get Started
          </motion.button>
        </div>
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 10 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2, delay: 0.25, ease: "easeInOut" }}
          className="w-full flex justify-end pt-16">
          <img src={bg} alt="crypto image" width={550} />
        </motion.div>
      </section>
      <section className="py-16 px-20 flex flex-col gap-6">
        <h2 className="text-[2.5rem] text-[#ef2b55] font-[600]">
          Global Crypto Data
        </h2>
        <div className="w-full flex flex-wrap">
          {globalDataList.map(({ id, title, value }) => (
            <div key={id} className="w-1/3 py-5 flex flex-col gap-3">
              <p className="opacity-80">{title}</p>
              <p className="text-[1.75rem] font-[6500]">{millify(value)}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
