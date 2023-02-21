import { createSlice } from "@reduxjs/toolkit";

export const contactsInitialState = JSON.parse(window.localStorage.getItem('contacts')) ?? [];

console.log("contactsInitialState : ", contactsInitialState);

const contactsSlice = createSlice( { 
  name: 'contacts',

  initialState: contactsInitialState,

  reducers: {
    // addContact(state, action) {
    //     state.push(action.payload);
    //   },
    //   prepare (name, number) {
    //     return {
    //       payload:{
    //         name,
    //         number,
    //         id: nanoid(),
    //       },
    //     }
    //   },
    // },
    // }

    // deleteContact: {
    //   reducer (state, action) {
    //     return state.filter( contact => contact.id !== action.preload)
    //   },
    // }

    addContact(state, action) {
      return[...state, action.payload];
    },

    deleteContact (state, action) {
        return state.filter( contact => contact.id !== action.preload);
    }  
  }
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;