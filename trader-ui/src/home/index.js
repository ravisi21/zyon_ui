import React from "react";
import { createRoot } from "react-dom/client";
import HomeContent from "../components/Home/HomeContent";
import "../index.css";
import * as serviceWorkerRegistration from "../serviceWorkerRegistration";
import reportWebVitals from "../reportWebVitals";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HomeContent />
  </React.StrictMode>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more about: https://bit.ly/CRA-vitals
reportWebVitals();
