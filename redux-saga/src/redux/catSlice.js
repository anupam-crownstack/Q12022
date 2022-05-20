import { createSlice } from "@reduxjs/toolkit";

export const catSlice = createSlice({
  name: "cats",
  initialState: {
    cats: [],
    isLoading: false,
    errorMessage: null,
  },
  reducers: {
    getCatsFetch: (state) => {
      state.isLoading = true;
    },
    getCatsSuccess: (state, action) => {
      state.cats = action.payload;
      state.isLoading = false;
    },
    getCatsError: (state, action) => {
      state.errorMessage = action.payload;
      state.isLoading = false;
    },
  },
});

export const { getCatsFetch, getCatsSuccess, getCatsError } = catSlice.actions;
export default catSlice.reducer;
