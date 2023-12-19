import { ReactNode, useEffect } from "react";
import { useParams } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
import millify from "millify";
import {
  AiOutlineDollar,
  AiOutlineTrophy,
  AiOutlineThunderbolt,
  AiOutlineFund,
  AiOutlineExclamationCircle,
  AiOutlineSync,
} from "react-icons/ai";
import { LiaMoneyBillWaveSolid, LiaClipboardListSolid } from "react-icons/lia";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoCheckmark } from "react-icons/io5";
import { MdCurrencyExchange, MdClose } from "react-icons/md";
import { useGetCryptoDetailsQuery } from "../services/cryptoApi";
import { CryptoChart, Loader, Error } from "../components";

interface CryptoStatsItemProps {
  title: string;
  value: string | number | ReactNode;
  icon: ReactNode;
}

const CryptoStatsItem = ({ icon, title, value }: CryptoStatsItemProps) => (
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

  const { data, isFetching, error } = useGetCryptoDetailsQuery(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cryptoDetails = data?.data?.coin;

  const cryptoStats: CryptoStatsItemProps[] = [
    {
      title: "Price to USD",
      value: `$ ${millify(Number(cryptoDetails?.price))}`,
      icon: <AiOutlineDollar />,
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: <AiOutlineTrophy /> },
    {
      title: "24h Volume",
      value: `$ ${millify(Number(cryptoDetails?.["24hVolume"]))}`,
      icon: <AiOutlineThunderbolt />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <LiaMoneyBillWaveSolid />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <BsGraphUpArrow />,
    },
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <AiOutlineFund />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <MdCurrencyExchange />,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.supply?.confirmed ? <IoCheckmark /> : <MdClose />,
      icon: <AiOutlineExclamationCircle />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <LiaClipboardListSolid />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <AiOutlineSync />,
    },
  ];

  if (isFetching) return <Loader />

  if (error) return <Error errorMsg={error?.data?.message} />

  return (
    <section className="mt-[5rem] mb-[2.5rem] flex flex-col gap-5 px-6 md:px-36 py-12 items-center">
      <h2 className="section-heading text-center">
        {cryptoDetails?.name} ({cryptoDetails?.symbol}) Details
      </h2>
      <p className="text-[0.895rem] md:text-[1.05rem] text-center">
        View {cryptoDetails?.name} live price in US Dollar (USD), value
        statistics, market cap and supply.{" "}
      </p>
      <CryptoChart
        id={id}
        coinName={cryptoDetails?.name}
        currentPrice={cryptoDetails?.price}
      />
      <div className="flex flex-col w-full gap-12 mt-8">
        <h3 className="text-[#ef2b55] text-[1.45rem] md:text-[1.65rem] font-[600] text-center">
          Value Statistics
        </h3>
        <div className="flex flex-col md:flex-row items-center md:gap-20 gap-8">
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
      <div className="w-full flex flex-col md:flex-row items-start md:gap-20 gap-8 mt-[3.25rem]">
        <div className="flex flex-col items-start gap-5 w-full">
          <h3 className="text-[#ef2b55] text-[1.45rem] md:text-[1.65rem] font-[600]">
            About {cryptoDetails?.name}
          </h3>
          <p className="text-[0.85rem] md:text-[0.975rem] leading-6 md:leading-7">
            {HTMLReactParser(
              cryptoDetails?.description || "No description provided!"
            )}
          </p>
        </div>
        <div className="flex flex-col gap-8 w-full">
          <h3 className="text-[#ef2b55] text-[1.45rem] md:text-[1.65rem] font-[600]">
            {cryptoDetails?.name} Links
          </h3>
          <div className="flex flex-col gap-8 items-center">
            {cryptoDetails.links?.map((link: any, index: number) => (
              <div
                key={index}
                className="w-full flex justify-between items-center px-3 pb-3 border-b text-[0.95rem]">
                <h4 className="capitalize">{link.type}</h4>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-blue-700">
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptocurrencyDetails;
