import { createBrowserRouter } from "react-router";
import App from "./App.jsx";
import { Match, Rules, Score } from "./sections";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/Match", element: <Match /> },
  { path: "/Rules", element: <Rules /> },
  { path: "/Score", element: <Score /> },
]);
