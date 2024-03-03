import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Main from "./components/Main";
import reportWebVitals from "./reportWebVitals";

import Dongurami from "./components/SideProjects/Dongurami";
import DonguramiV2 from "./components/SideProjects/DonguramiV2";
import Imsangtae from "./components/SideProjects/Imsangtae";
import SideNav from "./components/Nav/SideNav";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
            </>
          }
        />
        <Route
          path="/dongurami"
          element={
            <>
              <Dongurami />
              <SideNav location="dongurami" />
            </>
          }
        />
        <Route
          path="/dongurami-v2"
          element={
            <>
              <DonguramiV2 />
              <SideNav location="dongurami-v2" />
            </>
          }
        />
        <Route
          path="/imsangtae"
          element={
            <>
              <Imsangtae />
              <SideNav location="imsangtae" />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
