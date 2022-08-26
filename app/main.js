import React from "react";
import { createRoot } from "react-dom/client";
import Root from "./Root";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./store";

const store = configureStore();

const root = createRoot(document.getElementById("main"));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Root />
    </Provider>
  </BrowserRouter>
);
