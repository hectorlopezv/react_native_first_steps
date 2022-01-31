import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import netTextSlice from './netTextSlice';

const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    counter: counterSlice,
    data: netTextSlice,
  },
});

export default store;
