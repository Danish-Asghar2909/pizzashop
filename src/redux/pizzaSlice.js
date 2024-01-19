// pizzaSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [],
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    placeOrder: (state, action) => {
      const newOrder = {
        id: state.orders.length + 1,
        ...action.payload,
        stage: 'Placed',
        timeSpent: '0 min 0 sec',
      };
      state.orders.push(newOrder);
    },
    moveOrder: (state, action) => {
      const { orderId, stage } = action.payload;
      const order = state.orders.find((order) => order.id === orderId);
      if (order) {
        order.stage = stage;
        // Update the timeSpent based on your implementation
      }
    },
    cancelOrder: (state, action) => {
      const orderId = action.payload;
      state.orders = state.orders.filter((order) => order.id !== orderId);
    },
  },
});

export const { placeOrder, moveOrder, cancelOrder } = pizzaSlice.actions;
export default pizzaSlice.reducer;
