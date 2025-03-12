import { createSlice } from "@reduxjs/toolkit";
import { fetchRandomGifs } from "./operations";

export const randomSlice = createSlice({
  name: "randomGifs",
  initialState: {
    gif: null,
    loading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRandomGifs.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(fetchRandomGifs.fulfilled, (state, action) => {
      state.loading = false;
      state.gif = action.payload;
    });
    builder.addCase(fetchRandomGifs.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const randomReducer = randomSlice.reducer;
