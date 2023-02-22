import { createSlice } from "@reduxjs/toolkit";
import {contactsInitialState} from 'redux/constants';

// export const contactsInitialState = JSON.parse(window.localStorage.getItem('contacts')) ?? [];

console.log("contactsInitialState : ", contactsInitialState);


const contactsSlice = createSlice( { 
  name: 'contacts',

  initialState: [] ,

  reducers: {

    addContact(state, action) {
      return[...state, action.payload];
    },

    deleteContact (state, action) {
      return state.filter( contact => contact.id !== action.payload);
    }  
  }
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

console.log("contactsSlice.initialState: ", contactsSlice.initialState);