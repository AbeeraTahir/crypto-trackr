import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Home } from "./components";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
