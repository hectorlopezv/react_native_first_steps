import {createSlice, nanoid} from '@reduxjs/toolkit';
import CartItem from '../components/shop/CartItem';
import CarItem from '../models/cartItem';

const initialState = {
  items: {},
  totalAmount: 0,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addordercart(state, action) {
      return initialState;
    },
    addtocart(state, action) {
      const addedProduct = action.payload;
      const prodPrice = addedProduct.price;
      const prodTitle = addedProduct.title;
      if (state.items[addedProduct.id]) {
        state.items[addedProduct.id].quantity += 1;
        state.items[addedProduct.id].sum += prodPrice;
      } else {
        const newCartItem = new CarItem(1, prodPrice, prodTitle, prodPrice);
        state.items[addedProduct.id] = newCartItem;
      }
      state.totalAmount += prodPrice;
    },
    removefromcart(state, action) {
      const selectedCartItem = state.items[action.payload];
      const currentQty = state.items[action.payload].quantity;
      if (currentQty > 1) {
        //reduce amount
        const updatedCartItem = new CarItem(
          selectedCartItem.quantity - 1,
          selectedCartItem.productPrice,
          selectedCartItem.productTitle,
          selectedCartItem.sum - selectedCartItem.productPrice,
        );
        delete state.items[action.payload];
        state.items[action.payload] = updatedCartItem;
      } else {
        delete state.items[action.payload];
      }
    },
    // incremenet: {
    //   reducer(state, action) {
    //     state.value += action.payload.value;
    //   },
    //   prepare(value = 1) {
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         value: value,
    //       },
    //     };
    //   },
    // },
    // decrement(state, action) {
    //   state.value -= action.payload ?? 1;
    // },
  },
});
export const {addtocart, removefromcart} = cartSlice.actions;

export default cartSlice.reducer;
