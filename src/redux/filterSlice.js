import { createSlice } from "@reduxjs/toolkit";

export const filterInitialState = JSON.parse(window.localStorage.getItem('filter')) ?? '';

const filterSlice = createSlice({
  name: "filter",
  
  initialState: "",

  reducers: {
    filterChange: {
      reducer(state, action){
        state.filter = action.payload;
      },
    },
  },
});

export const { filterChange } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;