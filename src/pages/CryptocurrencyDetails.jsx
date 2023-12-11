import { useParams } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
import millify from "millify";
import {
  useGetCoinsDetailsQuery,
  useGetCoinsHistoryQuery,
} from "../services/cryptoApi";
import { Footer, CryptoChart } from "../components";

const CryptoStatsItem = ({ title, value }) => (
  <div className="w-full flex justify-between items-center pb-2 border-b">
    <p>{title}</p>
    <p>{value}</p>
  </div>
);

const CryptocurrencyDetails = () => {
  const { id } = useParams();

  const { data: cryptoDetails, isFetching } = useGetCoinsDetailsQuery(id);
  const { data: cryptoChartData } = useGetCoinsHistoryQuery(id);

  console.log(cryptoDetails);

  const cryptoStats = [
    {
      title: "Price to USD",
      value: `$ ${millify(cryptoDetails?.market_data?.current_price?.usd)}`,
    },
    {
      title: "Market Cap Rank",
      value: cryptoDetails?.market_cap_rank,
    },
    {
      title: "Market Cap",
      value: `$ ${millify(cryptoDetails?.market_data?.market_cap?.usd)}`,
    },
    {
      title: "Total Volume",
      value: `$ ${millify(cryptoDetails?.market_data?.total_volume?.usd)}`,
    },
    {
      title: "24h high price",
      value: `$ ${millify(cryptoDetails?.market_data?.high_24h?.usd)}`,
    },
    {
      title: "24h price change",
      value: `$ ${millify(
        cryptoDetails?.market_data?.market_cap_change_percentage_24h_in_currency
          ?.usd
      )}`,
    },
    {
      title: "All time high value",
      value: `$ ${millify(cryptoDetails?.market_data?.ath?.usd)}`,
    },
    {
      title: "Diluated Valuation",
      value: `$ ${millify(
        cryptoDetails?.market_data?.fully_diluted_valuation?.usd
      )}`,
    },
    {
      title: "Total Supply",
      value: `$ ${millify(cryptoDetails?.market_data?.total_supply)}`,
    },
    {
      title: "Circulating Supply",
      value: `$ ${millify(cryptoDetails?.market_data?.circulating_supply)}`,
    },
  ];

  const cryptoLinks = [
    {
      name: "Homepage",
      link: cryptoDetails?.links?.homepage[0],
    },
    {
      name: "Blockchain Site",
      link: cryptoDetails?.links?.blockchain_site[0],
    },
    {
      name: "Official Forum",
      link: cryptoDetails?.links?.official_forum_url[0],
    },
    {
      name: "GitHub",
      link: cryptoDetails?.links?.repos_url?.github[0],
    },
    {
      name: "Reddit",
      link: cryptoDetails?.links?.subreddit_url,
    },
  ];

  if (isFetching) "Loading...";

  return (
    <>
      <section className="mt-[5rem] flex flex-col gap-5 px-36 py-16 items-center">
        <h2 className="section-heading">
          {cryptoDetails?.name} ({cryptoDetails?.symbol}) Details
        </h2>
        <p>
          View {cryptoDetails?.name} live price in US Dollar (USD), value
          statistics, market cap and supply.{" "}
        </p>
        <CryptoChart
          coinHistory={cryptoChartData?.prices}
          coinName={cryptoDetails?.name}
          currentPrice={cryptoDetails?.market_data?.high_24h?.usd}
        />
        <div className="flex flex-col w-full gap-12 mt-8">
          <h3 className="text-[#ef2b55] text-[1.65rem] font-[600] text-center">
            Value Statistics
          </h3>
          <div className="flex items-center gap-16">
            <div className="flex flex-col w-full items-center gap-8">
              {cryptoStats.slice(0, 5).map(({ title, value }, index) => (
                <CryptoStatsItem key={index} title={title} value={value} />
              ))}
            </div>
            <div className="flex flex-col w-full items-center gap-8">
              {cryptoStats.slice(5).map(({ title, value }, index) => (
                <CryptoStatsItem key={index} title={title} value={value} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-16 w-full mt-12">
          <div className="flex flex-col items-start gap-5 w-full">
            <h3 className="text-[#ef2b55] text-[1.65rem] font-[600]">
              About {cryptoDetails?.name}
            </h3>
            <p className="text-[0.975rem] leading-7">
              {HTMLReactParser(
                cryptoDetails?.description?.en || "No description provided!"
              )}
            </p>
          </div>
          <div className="flex flex-col gap-8 w-full">
            <h3 className="text-[#ef2b55] text-[1.65rem] font-[600]">
              {cryptoDetails?.name} Links
            </h3>
            <div className="flex flex-col gap-8 items-center">
              {cryptoLinks.map(({ name, link }, index) => (
                <div
                  key={index}
                  className="w-full flex justify-between items-center pb-3 border-b">
                  <h4>{name}</h4>
                  {link && link.length > 0 ? (
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-blue-700">
                      Visit
                    </a>
                  ) : (
                    <p>Null</p>
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
