const createDebugger = require('redux-flipper').default;
import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import ordersSlice from './ordersSlice';
import productsSlice from './productsSlice';

const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    products: productsSlice,
    cart: cartSlice,
    orders: ordersSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(createDebugger()),
});

export default store;
