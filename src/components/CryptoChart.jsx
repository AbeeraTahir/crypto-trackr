import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";
import millify from "millify";
import PropTypes from "prop-types";

Chart.register(CategoryScale);

const CryptoChart = ({ coinHistory, coinName, currentPrice }) => {
  const coinTimestamp = [];
  const coinPrice = [];

  const timeOptions = {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "UTC",
  };

  coinHistory?.data?.history?.forEach((coin) => {
    return coinPrice.push(coin.price);
  });

  coinHistory?.data?.history?.forEach((coin) => {
    return coinTimestamp.push(
      new Date(coin.timestamp * 1000).toLocaleString("en-US", timeOptions)
    );
  });

  coinPrice.reverse();
  coinTimestamp.reverse();

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD (Last 24hrs (UTC))",
        data: coinPrice,
        fill: false,
        backgroundColor: "#ef2b55",
        borderColor: "#ef2b55",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          beginAtZero: true,
        },
      },
      y: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <>
      <div className="w-full flex flex-col md:flex-row items-center gap-3 md:justify-between mt-6 pt-4 border-t">
        <p className="text-[#ef2b55] text-[1.45rem] md:text-[1.65rem] font-[600]">
          {coinName} Price Chart
        </p>
        <p className="text-[0.85rem] md:text-[1.075rem] font-[500]">{`Current ${coinName} Price: $ ${millify(
          currentPrice
        )}`}</p>
      </div>
      <div className="chartCard">
        <div className="chartBox">
          <Line data={data} options={options} />
        </div>
      </div>
    </>
  );
};

CryptoChart.propTypes = {
  coinHistory: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))
  ).isRequired,
};

export default CryptoChart;
