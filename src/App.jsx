import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import { Nav, Home, Match, Rules, Score } from "./sections";

function App() {
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
