import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Score from "./pages/Score";
import Cricket from "./pages/Cricket";
import IPL from "./pages/IPL";
import News from "./pages/News";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/score">Score</Link></li>
            <li><Link to="/cricket">Cricket</Link></li>
            <li><Link to="/ipl">IPL</Link></li>
            <li><Link to="/news">News</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/score" element={<Score />} />
          <Route path="/cricket" element={<Cricket />} />
          <Route path="/ipl" element={<IPL />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
