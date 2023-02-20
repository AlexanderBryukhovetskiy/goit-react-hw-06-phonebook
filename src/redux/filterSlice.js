import { createSlice } from "@reduxjs/toolkit";

export const filterInitialState = JSON.parse(window.localStorage.getItem('filter')) ?? '';
console.log("filterInitialState: ", filterInitialState);

const filterSlice = createSlice({
  name: "filter",
  
  initialState: filterInitialState,

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