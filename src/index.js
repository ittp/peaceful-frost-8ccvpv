"use client";

import { createRoot } from "react-dom/client";

import App from "./App";
import "antd/dist/antd.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

let config = {};

const firewall = {
  ip: ["5.17.17.96/32"],
};

root.render(<App />);
