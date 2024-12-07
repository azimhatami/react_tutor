import { configureStore } from '@reduxjs/toolkit';
import cakeReducer from './cake/cakeSlice';
import milkReducer from './milk/milkSlice';

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    milk: milkReducer,
  },
});


export default store
