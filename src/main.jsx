
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { worker } from "./mock/index.js";

worker
  .start({ onUnhandledRequest: "warn" })
  .then(() => {
    createRoot(document.getElementById("root")).render(
      <StrictMode>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </StrictMode>,
    );
  })
  .catch((error) => console.error(error));
