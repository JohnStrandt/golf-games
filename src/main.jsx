import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = document.getElementById("root");

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

serviceWorkerRegistration.register();
