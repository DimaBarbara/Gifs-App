import { createSlice } from "@reduxjs/toolkit";
import { fetchGifs } from "./operations";

export const gifsSlice = createSlice({
  name: "searchGifs",
  initialState: {
    gifs: [],
    loading: false,
    error: false,
    query: "",
    page: 1,
  },
  reducers: {
    clearGifs: (state) => {
      state.gifs = [];
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGifs.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(fetchGifs.fulfilled, (state, action) => {
      state.loading = false;
      state.gifs = [...state.gifs, ...action.payload];
    });
    builder.addCase(fetchGifs.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const { clearGifs, setPage, setQuery } = gifsSlice.actions;
export const gifsReducer = gifsSlice.reducer;
