import {createSlice, nanoid} from '@reduxjs/toolkit';
import PRODUCTS from '../data/dummyData';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1'),
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
export const {incremenet, decrement} = productsSlice.actions;
export const selectProducts = state => state.products.availableProducts;

export default productsSlice.reducer;
