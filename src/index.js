import React from "react";
import { render } from "react-dom";
import "normalize.css";
import App from "./App";
import { GlobalStyle } from "./global-styles";
import reportWebVitals from "./reportWebVitals";

render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById("root")
);

reportWebVitals();
