const createDebugger = require('redux-flipper').default;
import {configureStore} from '@reduxjs/toolkit';
import {apiSlice} from './apislice';
import counterSlice from './counterSlice';
import netTextSlice from './netTextSlice';

const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    counter: counterSlice,
    data: netTextSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware).concat(createDebugger()),
});

export default store;
