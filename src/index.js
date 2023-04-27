import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./root";
import RootContext from "./context";

const root = ReactDOM.render(
  <RootContext>
    <Root />,
  </RootContext>,
  document.getElementById("root")
);
