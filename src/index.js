import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route,Routes } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

const basename = window.location.hostname === "localhost" ? "" : "/store";

root.render(
  <BrowserRouter basename="{basename}" >
    <Routes>
    <App />
    </Routes>
  </BrowserRouter>
);
