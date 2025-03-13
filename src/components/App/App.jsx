import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchPage from "../../pages/SearchPage";
import NotFoundPage from "../../pages/NotFoundPage";
import TrendPage from "../../pages/TrendPage";
import RandomPage from "../../pages/RAndomPage";
import Layout from "../Layout";
import s from "./App.module.css";

const App = () => {
  return (
    <div className={s.mainDiv}>
      <div className={s.giphyDiv}>
        <h2 className={s.giphyH}>GIPHY</h2>
        <img
          src="../public/GIPHY Icon LightBackgrounds 720.png"
          alt="GIPHY"
          width="50"
          height="50"
        />
      </div>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SearchPage />}></Route>
          <Route path="/random" element={<RandomPage />}></Route>
          <Route path="/trend" element={<TrendPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
