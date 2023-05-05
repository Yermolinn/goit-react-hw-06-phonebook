import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { initialState } from './initialState';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  reducers: {
    addContacts: {
      reducer(state, action) {
        return [...state, action.payload];
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContacts(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;