import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './Components/Counter/counterSlice';


export const store = configureStore({
    reducer: {
        counter: counterSlice
        
    },
  })