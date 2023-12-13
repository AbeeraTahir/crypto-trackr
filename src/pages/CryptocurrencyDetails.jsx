import { useParams } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
import millify from "millify";
import {
  AiOutlineDollar,
  AiOutlineTrophy,
  AiOutlineThunderbolt,
  AiOutlineArrowUp,
  AiOutlineSync,
} from "react-icons/ai";
import { FaRegChartBar, FaComments } from "react-icons/fa";
import { LiaMoneyBillWaveSolid, LiaClipboardListSolid } from "react-icons/lia";
import { BsGraphUpArrow, BsReddit } from "react-icons/bs";
import { BiCoinStack } from "react-icons/bi";
import { IoHome, IoLogoGithub } from "react-icons/io5";
import { SiHiveBlockchain } from "react-icons/si";
import { HashLoader } from "react-spinners";
import {
  useGetCoinsDetailsQuery,
  useGetCoinsHistoryQuery,
} from "../services/cryptoApi";
import { CryptoChart, Footer } from "../components";

const CryptoStatsItem = ({ icon, title, value }) => (
  <div className="w-full text-[0.85rem] md:text-[0.925rem] flex justify-between items-center px-2 pb-2 border-b">
    <div className="flex justify-center items-center gap-5">
      <span className="text-[1.05rem]">{icon}</span>
      <p>{title}</p>
    </div>
    <p>{value}</p>
  </div>
);

const CryptocurrencyDetails = () => {
  const { id } = useParams();

  const { data: cryptoDetails, isFetching } = useGetCoinsDetailsQuery(id);
  const { data: cryptoChartData } = useGetCoinsHistoryQuery(id);

  const cryptoStats = [
    {
      icon: <AiOutlineDollar />,
      title: "Price to USD",
      value: `$ ${millify(cryptoDetails?.market_data?.current_price?.usd)}`,
    },
    {
      icon: <AiOutlineTrophy />,
      title: "Market Cap Rank",
      value: cryptoDetails?.market_cap_rank,
    },
    {
      icon: <LiaMoneyBillWaveSolid />,
      title: "Market Cap",
      value: `$ ${millify(cryptoDetails?.market_data?.market_cap?.usd)}`,
    },
    {
      icon: <AiOutlineThunderbolt />,
      title: "Total Volume",
      value: `$ ${millify(cryptoDetails?.market_data?.total_volume?.usd)}`,
    },
    {
      icon: <AiOutlineArrowUp />,
      title: "24h high price",
      value: `$ ${millify(cryptoDetails?.market_data?.high_24h?.usd)}`,
    },
    {
      icon: <FaRegChartBar />,
      title: "24h price change",
      value: `$ ${millify(
        cryptoDetails?.market_data?.market_cap_change_percentage_24h_in_currency
          ?.usd
      )}`,
    },
    {
      icon: <BsGraphUpArrow />,
      title: "All time high value",
      value: `$ ${millify(cryptoDetails?.market_data?.ath?.usd)}`,
    },
    {
      icon: <BiCoinStack />,
      title: "Diluated Valuation",
      value: `$ ${millify(
        cryptoDetails?.market_data?.fully_diluted_valuation?.usd
      )}`,
    },
    {
      icon: <LiaClipboardListSolid />,
      title: "Total Supply",
      value: `$ ${millify(cryptoDetails?.market_data?.total_supply)}`,
    },
    {
      icon: <AiOutlineSync />,
      title: "Circulating Supply",
      value: `$ ${millify(cryptoDetails?.market_data?.circulating_supply)}`,
    },
  ];

  const cryptoLinks = [
    {
      icon: <IoHome />,
      name: "Homepage",
      link: cryptoDetails?.links?.homepage[0],
    },
    {
      icon: <SiHiveBlockchain />,
      name: "Blockchain Site",
      link: cryptoDetails?.links?.blockchain_site[0],
    },
    {
      icon: <FaComments />,
      name: "Official Forum",
      link: cryptoDetails?.links?.official_forum_url[0],
    },
    {
      icon: <IoLogoGithub />,
      name: "GitHub",
      link: cryptoDetails?.links?.repos_url?.github[0],
    },
    {
      icon: <BsReddit />,
      name: "Reddit",
      link: cryptoDetails?.links?.subreddit_url,
    },
  ];

  if (isFetching) {
    return (
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <HashLoader color="#ef2b55" />
      </div>
    );
  }

  return (
    <>
      <section className="mt-[5rem] mb-[2.5rem] flex flex-col gap-5 px-6 md:px-36 py-12 items-start md:items-center">
        <h2 className="section-heading">
          {cryptoDetails?.name} ({cryptoDetails?.symbol}) Details
        </h2>
        <p className="text-[0.895rem] md:text-[1.05rem]">
          View {cryptoDetails?.name} live price in US Dollar (USD), value
          statistics, market cap and supply.{" "}
        </p>
        <CryptoChart
          coinHistory={cryptoChartData?.prices}
          coinName={cryptoDetails?.name}
          currentPrice={cryptoDetails?.market_data?.high_24h?.usd}
        />
        <div className="flex flex-col w-full gap-12 mt-8">
          <h3 className="text-[#ef2b55] text-[1.45rem] md:text-[1.65rem] font-[600] text-center">
            Value Statistics
          </h3>
          <div className="flex flex-col md:flex-row items-center md:gap-16 gap-8">
            <div className="flex flex-col w-full items-center gap-8">
              {cryptoStats.slice(0, 5).map(({ icon, title, value }, index) => (
                <CryptoStatsItem
                  key={index}
                  icon={icon}
                  title={title}
                  value={value}
                />
              ))}
            </div>
            <div className="flex flex-col w-full items-center gap-8">
              {cryptoStats.slice(5).map(({ icon, title, value }, index) => (
                <CryptoStatsItem
                  key={index}
                  icon={icon}
                  title={title}
                  value={value}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-start md:gap-16 gap-8 mt-[3.25rem]">
          <div className="flex flex-col items-start gap-5 w-full">
            <h3 className="text-[#ef2b55] text-[1.45rem] md:text-[1.65rem] font-[600]">
              About {cryptoDetails?.name}
            </h3>
            <p className="text-[0.85rem] md:text-[0.975rem] leading-6 md:leading-7">
              {HTMLReactParser(
                cryptoDetails?.description?.en || "No description provided!"
              )}
            </p>
          </div>
          <div className="flex flex-col gap-8 w-full">
            <h3 className="text-[#ef2b55] text-[1.45rem] md:text-[1.65rem] font-[600]">
              {cryptoDetails?.name} Links
            </h3>
            <div className="flex flex-col gap-8 items-center">
              {cryptoLinks.map(({ icon, name, link }, index) => (
                <div
                  key={index}
                  className="w-full flex justify-between items-center px-3 pb-3 border-b text-[0.9rem]">
                  <div className="flex justify-center items-center gap-5">
                    <span className="text-[1.05rem] opacity-80">{icon}</span>
                    <h4>{name}</h4>
                  </div>
                  {link && link.length > 0 ? (
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-blue-700">
                      Visit
                    </a>
                  ) : (
                    <p>Not Available</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CryptocurrencyDetails;
