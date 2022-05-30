import React from "react";
import ReactDOM from "react-dom";

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./store/modules";
import { Provider } from "react-redux";

import App from "./App";

const store = configureStore({ reducer: rootReducer, devTools: process.env.NODE_ENV !== "production" });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
