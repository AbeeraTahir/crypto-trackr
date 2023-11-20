import { useParams } from "react-router-dom";
import {
  useGetCoinsDetailsQuery,
  useGetCoinsHistoryQuery,
} from "../services/cryptoApi";
import { Footer, CryptoChart } from "../components";

const CryptocurrencyDetails = () => {
  const { id } = useParams();

  const { data: cryptoDetails, isFetching } = useGetCoinsDetailsQuery(id);
  const { data: cryptoChartData } = useGetCoinsHistoryQuery(id);

  console.log(cryptoDetails);

  if (isFetching) "Loading...";

  return (
    <>
      <section className="flex flex-col gap-5 px-32 py-16 items-center">
        <h2 className="section-heading">
          {cryptoDetails?.name} ({cryptoDetails?.symbol}) Details
        </h2>
        <p>
          {cryptoDetails?.name} live price in US Dollar (USD), value statistics,
          market cap and supply.{" "}
        </p>
        <CryptoChart
          coinHistory={cryptoChartData?.prices}
          coinName={cryptoDetails?.name}
          currentPrice={cryptoDetails?.market_data?.high_24h?.usd}
        />
      </section>
      <Footer />
    </>
  );
};

export default CryptocurrencyDetails;
