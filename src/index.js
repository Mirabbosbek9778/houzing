import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./root";
import RootContext from "./context";
// import "antd/dist/antd.css";

const root = ReactDOM.render(
  <RootContext>
    <Root />
  </RootContext>,
  document.getElementById("root")
);
