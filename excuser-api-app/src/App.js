import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Home } from "./pages/home";
import { Pagenotfound } from "./pages/pagenotfound";

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">contact</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<Pagenotfound />} />
          </Routes>
        </Router>
      </div>

    </div>
  );
}

export default App;
