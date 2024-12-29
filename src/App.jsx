import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { Nav, Home, Match, Rules, Score } from "./sections";
import "./index.css";

function App() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      document.body.classList.add(savedTheme);
    } else {
      document.body.classList.add("light");
    }
  }, []);

  return (
    <main className="h-screen w-screen flex flex-col">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/match" element={<Match />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/score" element={<Score />} />
        </Routes>
        <Nav />
      </BrowserRouter>
    </main>
  );
}

export default App;
