import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {Contact} from '../models/contact';

interface ContactsState {
  data: Contact[];
  loading: boolean;
  error: string | null;
}

const initialState: ContactsState = {
  data: [],
  loading: false,
  error: null,
};

// export const fetchContacts = createAsyncThunk<Contact[]>(
//   'contacts/fetchContacts',
//   async () => {
//     const response = await fetch('https://reqres.in/api/users?page=2');
//     const data = await response.json();
//     return data.data;
//   },
// );

const fetchData = async (url: string) => {
  const response = await fetch(url);
  const result = await response.json();
  return result.data;
};

export const fetchContacts = createAsyncThunk<Contact[], string>(
  'contacts/fetchContacts',
  async url => {
    return fetchData(url);
  },
);

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  //DELETE CONTACT
  reducers: {
    deleteContact: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter(contact => contact.id !== action.payload);
    },
    //EDIT CONTACT
    editContact: (state, action: PayloadAction<Contact>) => {
      const index = state.data.findIndex(
        contact => contact.id === action.payload.id,
      );
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchContacts.fulfilled,
        (state, action: PayloadAction<Contact[]>) => {
          state.data = action.payload;
          state.loading = false;
        },
      )
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch contacts';
      });
  },
});

export const {deleteContact, editContact} = contactSlice.actions;
export default contactSlice.reducer;
