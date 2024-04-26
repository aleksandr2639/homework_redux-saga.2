import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navigateResponse: "/",
};

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setNavigate: (state, action) => {
      state.navigateResponse = action.payload;
    },
    clearNavigate: (state) => {
      state.navigateResponse = "/";
    },
  },
});

export const { setNavigate, clearNavigate } = errorSlice.actions;

export default errorSlice.reducer;
