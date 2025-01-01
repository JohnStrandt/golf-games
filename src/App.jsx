import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { Nav, Home, Match, Rules, Score } from "./sections";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log("clicked on the darky!");
  };

  // useEffect(() => {
  //   const savedTheme = localStorage.getItem("theme");
  //
  //   if (savedTheme) {
  //     document.body.classList.add(savedTheme);
  //   } else {
  //     document.body.classList.add("light");
  //   }
  // }, []);

  return (
    <main className="h-screen w-screen flex flex-col">
      <div className={`${darkMode && "dark"}`}>
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
