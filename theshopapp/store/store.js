const createDebugger = require('redux-flipper').default;
import {configureStore} from '@reduxjs/toolkit';

import counterSlice from './counterSlice';

const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    counter: counterSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(createDebugger()),
});

export default store;
