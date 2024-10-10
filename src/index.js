import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route,Routes ,useNavigate } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

const basename = window.location.hostname === "localhost" ? "" : "/store";
const navigate = useNavigate();
root.render(
  <BrowserRouter basename={basename} >

    <App />
  </BrowserRouter>
);
