import { configureStore } from "@reduxjs/toolkit";
import { gifsReducer } from "./searchSlice";
import { trendReducer } from "./trendSlice";
import { randomReducer } from "./randomSlice";

export const store = configureStore({
  reducer: {
    searchGifs: gifsReducer,
    trendGifs: trendReducer,
    randomGifs: randomReducer,
  },
});
