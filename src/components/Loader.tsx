import { HashLoader } from "react-spinners";
import { SimplifyProps } from "../pages/Cryptocurrencies";

const Loader = ({ simplified }: SimplifyProps) => {
  return (
    <div
      className={`${
        simplified ? "h-[10rem]" : "h-screen"
      } flex justify-center items-center`}>
      <HashLoader color="#ef2b55" />
    </div>
  );
};

export default Loader;
