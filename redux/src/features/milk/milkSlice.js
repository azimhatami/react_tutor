import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  numOfMilks: 12,
};

const milkSlice = createSlice({
  name: 'milk',
  initialState,
  reducers: {
    buyMilk: (state, action) => {
      state.numOfMilks = state.numOfMilks - action.payload
    }
  }
}); 


export const { buyMilk } = milkSlice.actions;

export default milkSlice.reducer;
