import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./components/Navbar/Navbar";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <div className='outer-app-wrapper flex justify-center items-center w-[100vw] h-[100vh] bg-primary'>
        <div className='inner-app-wrapper flex flex-row-reverse justify-between items-center gap-20 max-w-[1000px] h-auto m-auto '>
          <Navbar />
          <App />
        </div>{" "}
      </div>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
