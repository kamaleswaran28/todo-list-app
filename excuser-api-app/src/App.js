import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Home } from "./pages/home";
import { Pagenotfound } from "./pages/pagenotfound";
import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();
function App() {
  const [username, setUserName] = useState("kamales");

  return (
    <div className="App">
      <div>
        {/* <div className="username-div">
          <p> Welcome {username} </p>
        </div> */}
        <AppContext.Provider value={{username, setUserName}}>
          <Router>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">contact</Link>
            </nav>
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/about"
                element={
                  <About />
                }
              />
              <Route path="/contact" element={<Contact />} />
              <Route path="/*" element={<Pagenotfound />} />
            </Routes>
          </Router>
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
