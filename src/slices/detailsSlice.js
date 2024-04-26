import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: {},
  loading: false,
  error: null,
};

const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    detailsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    detailsSuccess: (state, action) => {
      state.loading = false;
      state.item = action.payload;
    },
    detailsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetDetailsError: (state) => {
      state.error = null;
    },
  },
});

export const {
  detailsRequest,
  detailsSuccess,
  detailsFailure,
  resetDetailsError,
} = detailsSlice.actions;

export default detailsSlice.reducer;
