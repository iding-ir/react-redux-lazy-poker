import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./css/vars.css";
import "./css/icons.css";
import "./css/index.css";
import store from "./stores";
import App from "./components/App";
import "./css/hacks.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
