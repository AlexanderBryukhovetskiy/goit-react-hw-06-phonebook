import { createSlice } from "@reduxjs/toolkit";

const contactsInitialState = JSON.parse(window.localStorage.getItem('contacts')) ?? [];

const contactsSlice = createSlice( { 
  name: 'contacts',

  initialState: contactsInitialState,

  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      preload (id, name, number) {
        return {
          name,
          number,
          id
        };
      },
    },

    deleteContact: {
      reducer (state, action) {
        return state.filter( contact => contact.id !== action.preload)
      },
    },
  }
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;