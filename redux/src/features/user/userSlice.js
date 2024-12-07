import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAsyncUsers = createAsyncThunk('user/getAsyncUsers', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data
  } catch(error) {
    return rejectWithValue(error.message);
  }
});

const initialState = {
  loading: false,
  data: [],
  error: ''
};


const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncUsers.pending, (state, action) => {
        state.loading = true;
        state.data = [];
        state.error = '';
      })
      .addCase(getAsyncUsers.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getAsyncUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.data = [];
      })
  },
});


export default userSlice.reducer;
