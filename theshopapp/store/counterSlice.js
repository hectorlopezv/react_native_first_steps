import {createSlice, nanoid} from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    incremenet: {
      reducer(state, action) {
        state.value += action.payload.value;
      },
      prepare(value = 1) {
        return {
          payload: {
            id: nanoid(),
            value: value,
          },
        };
      },
    },
    decrement(state, action) {
      state.value -= action.payload ?? 1;
    },
  },
});
export const actions = counterSlice.actions;

export const selectCount = state => state.counter.value;

export default counterSlice.reducer;
