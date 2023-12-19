import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Cryptocurrencies, CryptocurrencyDetails } from "./pages";
import { Navbar, Footer } from "./components";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
          <Route path="/crypto/:id" element={<CryptocurrencyDetails />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
