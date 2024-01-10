import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import "./pages/Dashboard/DashBoard.css";
import App from "./App";
import "./all.min.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
