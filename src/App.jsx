import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Cryptocurrencies } from "./pages";
import { Navbar } from "./components";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
      </Routes>
    </Router>
  );
};

export default App;
