import { HashLoader } from "react-spinners";
import { SimplifyProps } from "../pages/Cryptocurrencies"

const Loader = ({ simplified }: SimplifyProps) => {
  return (
    <div className={`${simplified ? "h-[10rem]" : "h-screen"} relative`}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <HashLoader color="#ef2b55" />
      </div>
    </div>
  );
}

export default Loader