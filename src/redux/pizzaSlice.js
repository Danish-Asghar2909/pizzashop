import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [],
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    placeOrder: (state, action) => {
      state.orders.push(action.payload);
    },
    // Additional reducers for moving between stages, cancelling orders, etc.
  },
});

export const { placeOrder } = pizzaSlice.actions;
export default pizzaSlice.reducer;
