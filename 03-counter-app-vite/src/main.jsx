import React from "react";
import ReactDOM from "react-dom/client";
import { FirstApp } from "./FirstApp";
import { HelloWorldApp } from "./HelloWorldApp";
import { CounterApp } from "./CounterApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp value={10} />
    {/* <FirstApp
    title={'Title'}
    subTitle={'Sub title'}
    /> */}
    {/* sending props to its children */}
    {/* <HelloWorldApp /> */}
  </React.StrictMode>
);
