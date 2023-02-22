import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice( {
  name: "filter",
  
  initialState: {value: ""},

  reducers: {
    filterChange(state, action) {
      state.value = action.payload;
    },
  },
});

export const { filterChange } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;