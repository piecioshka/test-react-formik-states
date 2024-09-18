import "../index.html";
import "../styles/app.css";
import "../styles/table.css";

import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/app";

const container = document.getElementById("app");
if (!container) {
  throw new Error("Element with id 'app' not found");
}

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
