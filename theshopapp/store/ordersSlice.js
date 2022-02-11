import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {apiEndPoint} from '../constants/firebaseLink';
import Order from '../models/order';
export const addOrderThunk = createAsyncThunk(
  'data/addorderfirebase',
  async ({cartItems, totalAmount}) => {
    await fetch(`${apiEndPoint}orders/u1.json`, {
      method: 'POST',
      body: JSON.stringify({
        cartItems,
        totalAmount,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
);
export const setOrderThunk = createAsyncThunk('data/setorder', async () => {
  const response = await fetch(`${apiEndPoint}orders/u1.json`);
  const data = response.json();
  return data;
});

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
  extraReducers(builder) {
    builder

      .addCase(addOrderThunk.pending, (state, _) => {
        state.statusorders = 'pending';
      })
      .addCase(addOrderThunk.fulfilled, (state, _) => {
        state.statusorders = 'succeeded';
      })
      .addCase(addOrderThunk.rejected, (state, _) => {
        state.statusorders = 'error';
      })
      .addCase(setOrderThunk.fulfilled, (state, action) => {
        console.log('las ordenes', action.payload);
        const loadedOrders = [];
        for (let key in action.payload) {
          loadedOrders.push(
            new Order(
              key,
              action.payload[key].cartItems,
              action.payload[key].totalAmount,
              new Date(action.payload[key].date),
            ),
          );
        }
        state.orders = loadedOrders;
      });
  },
});
export const {addorder} = ordersSlice.actions;

export default ordersSlice.reducer;
