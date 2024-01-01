import { SimplifyProps } from "../pages/Cryptocurrencies";

interface ErrorProps extends SimplifyProps {
  errorMsg: string;
}

const Error = ({ simplified, errorMsg }: ErrorProps) => {
  console.log(simplified);
  return (
    <div
      className={`${
        simplified ? "h-[10rem]" : "h-screen"
      } flex justify-center items-center`}>
      <p className="text-red-700 text-center">Error: {errorMsg}</p>
    </div>
  );
};

export default Error;
