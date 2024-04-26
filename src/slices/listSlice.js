import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    listRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    listSuccess: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
    listFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetListError: (state) => {
      state.error = null;
    },
  },
});

export const { listRequest, listSuccess, listFailure, resetListError } =
  listSlice.actions;

export default listSlice.reducer;
