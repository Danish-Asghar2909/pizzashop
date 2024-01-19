import { combineReducers } from '@reduxjs/toolkit';
import pizzaReducer from './pizzaSlice';

const rootReducer = combineReducers({
  pizza: pizzaReducer,
  // Add more reducers if needed
});

export default rootReducer;
