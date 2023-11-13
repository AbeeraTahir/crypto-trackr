import { motion } from "framer-motion";
import { useGetGlobalDataQuery } from "../services/cryptoApi";
import millify from "millify";
import SectionWrapper from "../hoc/SectionWrapper";
import { textFadeIn, listFadeIn } from "../utils/motion";

const GlobalData = () => {
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
    <section className="flex flex-col gap-6">
      <motion.h2
        variants={textFadeIn()}
        className="text-[2.5rem] text-[#ef2b55] font-[600]">
        Global Crypto Data
      </motion.h2>
      <div className="w-full flex flex-wrap">
        {globalDataList.map(({ id, title, value }) => (
          <motion.div
            variants={listFadeIn(id * 0.4)}
            key={id}
            className="w-1/3 py-5 flex flex-col gap-3">
            <p className="opacity-80">{title}</p>
            <p className="text-[1.75rem] font-[6500]">{millify(value)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(GlobalData, "");
