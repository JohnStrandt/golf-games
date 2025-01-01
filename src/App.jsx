import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { Nav, Home, Match, Rules, Score } from "./sections";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    // will not update until next render so:
    if (!darkMode) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme && theme == "dark") {
      setDarkMode(true);
    }
  }, []);

  return (
    <main className="h-screen w-screen flex flex-col">
      <div className={`${darkMode ? "dark" : "light"}`}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/match" element={<Match />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/score" element={<Score />} />
          </Routes>
          <Nav onClick={toggleDarkMode} />
        </BrowserRouter>
      </div>
    </main>
  );
}

export default App;
