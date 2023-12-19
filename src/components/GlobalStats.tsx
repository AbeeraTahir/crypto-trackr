import millify from "millify";
import Loader from "./Loader";
import Error from "./Error";
import { useGetCryptosQuery } from "../services/cryptoApi";

const GlobalStats = () => {
  const { data, isFetching, error } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  const globalDataList = [
    {
      id: 1,
      title: "Total Currencies",
      value: globalStats?.total,
    },
    {
      id: 2,
      title: "Total Exchanges",
      value: globalStats?.totalExchanges,
    },
    {
      id: 3,
      title: "Total Market Cap",
      value: globalStats?.totalMarketCap,
    },
    {
      id: 4,
      title: "Total 24h Volume",
      value: globalStats?.total24hVolume,
    },
    {
      id: 5,
      title: "Total Markets",
      value: globalStats?.totalMarkets,
    },
  ];

  if (error) return <Error simplified={true} errorMsg={error?.data?.message} />

  return (
    <>
      {isFetching ? (
        <Loader simplified />
      ) : (
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
      )}
    </>
  );
};

export default GlobalStats;
