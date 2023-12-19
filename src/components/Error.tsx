import { SimplifyProps } from "../pages/Cryptocurrencies"

interface ErrorProps extends SimplifyProps {
  errorMsg: string;
}

const Error = ({ simplified, errorMsg }: ErrorProps) => {
  return (
    <div className={`${simplified ? "h-[10rem]" : "h-screen"} relative`}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <p className="text-red-700 text-center">Error: {errorMsg}</p>
      </div>
    </div>
  );
}

export default Error