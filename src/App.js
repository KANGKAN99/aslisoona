import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Importing all the page components
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Beaches from "./pages/Beaches";
import Temples from "./pages/Temples";
import Countries from "./pages/Countries";

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav>
          <ul style={{ display: "flex", listStyle: "none", gap: "15px" }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/beaches">Beaches</Link></li>
            <li><Link to="/temples">Temples</Link></li>
            <li><Link to="/countries">Countries</Link></li>
          </ul>
        </nav>

        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/beaches" element={<Beaches />} />
          <Route path="/temples" element={<Temples />} />
          <Route path="/countries" element={<Countries />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
