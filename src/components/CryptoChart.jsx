import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";
import millify from "millify";
import PropTypes from "prop-types";

Chart.register(CategoryScale);

const CryptoChart = ({ coinHistory, coinName, currentPrice }) => {
  const coinTimestamp = [];
  const coinPrice = [];

  coinHistory?.forEach((item) => {
    const date = new Date(item[0]);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Adding 1 because getMonth() returns zero-based months
    const year = date.getFullYear();
    return coinTimestamp.push(`${day}/${month}/${year}`);
  });
  coinHistory?.forEach((item) => coinPrice.push(item[1]));

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD in the last 7 days",
        data: coinPrice,
        fill: false,
        backgroundColor: "#ef2b55",
        borderColor: "#ef2b55",
      },
    ],
  };

  const options = {
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
      <Line data={data} options={options} />
    </>
  );
};

CryptoChart.propTypes = {
  coinHistory: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))
  ).isRequired,
};

export default CryptoChart;
