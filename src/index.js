import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";   // ✅ Router only here
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
