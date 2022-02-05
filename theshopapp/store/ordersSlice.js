import {createSlice} from '@reduxjs/toolkit';
import Order from '../models/order';

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: [],
  },
  reducers: {
    addorder(state, action) {
      const cartItems = action.payload.cartItems;
      const amount = action.payload.totalAmount;
      const newOrder = new Order(
        new Date().toString(),
        cartItems,
        amount,
        new Date(),
      );
      state.orders.push(newOrder);
    },
  },
});
export const {addorder} = ordersSlice.actions;

export default ordersSlice.reducer;
