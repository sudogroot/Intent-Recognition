import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import store from "./store";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
    <App />
,
  document.getElementById("root")
);
registerServiceWorker()
