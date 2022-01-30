import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  value: 0,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    incremenet(state, action) {
      const { incremenetValue } = action.payload;
      state.value += incremenetValue;
    },
    decrement(state, action) {
      const { decrementedValue } = action.payload;
      state.value += decrementedValue;
    },
  },
});

export const {
  allTodosCompleted,
  completedTodosCleared,
  todoAdded,
  todoColorSelected,
  todoDeleted,
  todoToggled,
  todosLoaded,
  todosLoading,
} = todosSlice.actions;

export default todosSlice.reducer;
