import {createSlice} from '@reduxjs/toolkit';
import PRODUCTS from '../data/dummyData';
import Product from '../models/product';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1'),
  },
  reducers: {
    createproduct(state, action) {
      const {title, description, imageUrl, price} = action.payload;
      const newProduct = new Product(
        new Date().toString(),
        'u1',
        title,
        imageUrl,
        description,
        price,
      );
      state.availableProducts.push(newProduct);
      state.userProducts.push(newProduct);
    },
    updateproduct(state, action) {
      const {title, description, imageUrl, pid} = action.payload;
      const productIndex = state.userProducts.findIndex(
        prod => prod.ownerId === action.pid,
      );
      console.log(
        ' state.userProducts[productIndex]',
        state.userProducts[productIndex],
      );
      const updatedProduct = new Product(
        pid,
        state.userProducts[productIndex].ownerId,
        title,
        imageUrl,
        description,
        state.userProducts[productIndex].price,
      );
      state.userProducts[productIndex] = updatedProduct;
      const availableProductIndex = state.availableProducts.findIndex(
        prod => prod.id === action.pid,
      );
      state.availableProducts[availableProductIndex] = updatedProduct;
    },
    deleteproduct(state, action) {
      state.userProducts = state.userProducts.filter(
        product => product.id !== action.payload,
      );
      state.availableProducts = state.availableProducts.filter(
        product => product.id !== action.payload,
      );
    },
  },
});
export const {deleteproduct, createproduct, updateproduct} =
  productsSlice.actions;

export default productsSlice.reducer;
