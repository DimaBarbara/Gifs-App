import { createSlice } from "@reduxjs/toolkit";
import { fetchTrendGifs } from "./operations";

export const trendSlice = createSlice({
  name: "trendSlice",
  initialState: {
    gifs: [],
    loading: false,
    error: false,
    page: 1,
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTrendGifs.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(fetchTrendGifs.fulfilled, (state, action) => {
      state.loading = false;
      const newGifs = action.payload.filter(
        (newGif) =>
          !state.gifs.some((existingGif) => existingGif.id === newGif.id)
      );

      state.gifs = [...state.gifs, ...newGifs];
    });
    builder.addCase(fetchTrendGifs.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});
export const { setPage } = trendSlice.actions;
export const trendReducer = trendSlice.reducer;
