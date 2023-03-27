// Copyright (C) 2022 Varghese Mathew (Matt)
// Distributed under GNU GENERAL PUBLIC LICENSE Version 3
// See ~/license.txt for details
// Blog: https://mattvarghese-cs.blogspot.com/2022/01/minimal-typescript-react-project.html
// GitHub: https://github.com/mattvarghese/minimal-typescript-react-template

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";

// Reference: https://github.com/reactwg/react-18/discussions/5
const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container as HTMLElement);
root.render(<App heading="Hello React" body="Hope you have a ton of fun!" />,);
