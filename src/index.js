import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// strict mode adds additional checks and warnings in our app
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
