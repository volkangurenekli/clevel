import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.css";
import "./scss/index.scss";
import { Provider } from "react-redux";
import configureStore from "./redux/reducers/configureStore";
import { BrowserRouter } from "react-router-dom";
const store = configureStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
