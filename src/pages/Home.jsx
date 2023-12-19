import { Link } from "react-router-dom";
import Cryptocurrencies from "./Cryptocurrencies";
import { Hero, GlobalStats } from "../components";

const Home = () => {
  return (
    <>
      <Hero />
      <section
        id="crypto-stats"
        className="md:px-16 py-16 flex flex-col gap-12 md:gap-16">
        <div className="px-6 flex flex-col gap-6">
          <h2 className="section-heading">Global Crypto Stats</h2>
          <GlobalStats />
        </div>
        <div className="flex flex-col gap-10">
          <h2 className="px-6 section-heading">
            Top 10 Cryptocurrencies in the World
          </h2>
          <div className="px-2">
            <Cryptocurrencies simplified />
          </div>
          <Link className="md:mr-0 mr-auto ml-auto" to="/cryptocurrencies">
            <button className="btn">Show more</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
