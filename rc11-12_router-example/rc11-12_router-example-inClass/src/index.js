import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// normalde App.js te browser routeri sarmallayabilirdik ama burada da olabilir. app i burada sarmmaldik parentlerden birini sarmallamk gerekiyordu