import React from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "components/App";

import "./assets/styles/index.scss";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);

root.render(
    <BrowserRouter
        basename={
            process.env.NODE_ENV === "production" ? "/vladimirskii-fest" : "/"
        }
    >
        <App />
    </BrowserRouter>,
);
