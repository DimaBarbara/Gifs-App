import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import NotFoundPage from "./pages/NotFoundPage";
import TrendPage from "./pages/TrendPage";
import RandomPage from "./pages/RAndomPage";
import Layout from "./components/Layout";

const App = () => {
  return (
    <div>
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
