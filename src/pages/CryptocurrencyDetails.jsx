import { useParams } from "react-router-dom";
import { useGetCoinsDetailsQuery } from "../services/cryptoApi";
import { Footer } from "../components";

const CryptocurrencyDetails = () => {
  const { id } = useParams();

  const { data, isFetching } = useGetCoinsDetailsQuery(id);
  console.log(data);

  if (isFetching) "Loading...";

  return (
    <>
      <section className="mt-[5rem] flex flex-col gap-5 p-16 items-center">
        <h2 className="section-heading">
          {data.name} ({data.symbol}) Details
        </h2>
        <p>
          {data.name} live price in US Dollar (USD), value statistics, market
          cap and supply.{" "}
        </p>
      </section>
      <Footer />
    </>
  );
};

export default CryptocurrencyDetails;
