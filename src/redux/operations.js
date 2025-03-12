import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "https://api.giphy.com/v1/gifs";
const API_KEY = "sAlXrb72BdSIsPhnpKaVEPO0clKBA1LF";

export const fetchGifs = createAsyncThunk(
  "gifs/fetchGifs",
  async ({ query, page }, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/search`, {
        params: {
          api_key: API_KEY,
          q: query,
          limit: 12,
          offset: (page - 1) * 12,
        },
      });
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const fetchRandomGifs = createAsyncThunk(
  "gifs/fetchRandomGifs",
  async (_, thunkAPI) => {
    try {
      const randomResponse = await axios.get(`${BASE_URL}/random`, {
        params: {
          api_key: API_KEY,
        },
      });
      return randomResponse.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const fetchTrendGifs = createAsyncThunk(
  "gifs/fetchTrendGifs",
  async ({ page }, thunkAPI) => {
    try {
      const trendResponse = await axios.get(`${BASE_URL}/trending`, {
        params: {
          api_key: API_KEY,
          limit: 12,
          offset: (page - 1) * 12,
        },
      });
      return trendResponse.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
