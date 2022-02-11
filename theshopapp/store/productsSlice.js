import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {createIconSetFromFontello} from 'react-native-vector-icons';
import {apiEndPoint} from '../constants/firebaseLink';
import Product from '../models/product';
export const setProductsthunk = createAsyncThunk(
  'data/setproducts',
  async () => {
    const response = await fetch(apiEndPoint + 'products.json');
    const resData = await response.json();

    return resData;
  },
);

export const createProductthunk = createAsyncThunk(
  'data/createproduct',
  async ({title, description, imageUrl, price}) => {
    await fetch(apiEndPoint + 'products.json', {
      method: 'POST',
      body: JSON.stringify({
        title,
        description,
        imageUrl,
        price,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return {title, description, imageUrl, price};
  },
);

export const updateProductthunk = createAsyncThunk(
  'data/updateproduct',
  async ({title, description, imageUrl, pid}) => {
    await fetch(`${apiEndPoint}products/${pid}.json`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        description,
        imageUrl,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
);

export const deleteProductthunk = createAsyncThunk(
  'data/deleteproduct',
  async pid => {
    await fetch(`${apiEndPoint}products/${pid}.json`, {
      method: 'DELETE',
    });
  },
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    availableProducts: null,
    userProducts: null,
    statusproducts: null,
    status: null,
  },
  reducers: {
    updateproduct(state, action) {
      const {title, description, imageUrl, pid} = action.payload;

      const productIndex = state.userProducts.findIndex(
        prod => prod.pid === action.pid,
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
  extraReducers(builder) {
    builder
      .addCase(createProductthunk.fulfilled, (state, action) => {
        state.status = 'succeeded';
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
      })
      .addCase(setProductsthunk.pending, (state, _) => {
        state.statusproducts = 'pending';
      })
      .addCase(setProductsthunk.fulfilled, (state, action) => {
        state.statusproducts = 'succeeded';

        const tempData = [];

        for (let key in action.payload) {
          const item = action.payload[key];
          console.log('item', item);
          const product = new Product(
            key,
            'u1',
            item.title,
            item.imageUrl,
            item.description,
            item.price,
          );
          tempData.push(product);
        }
        state.availableProducts = tempData;
        state.userProducts = tempData.filter(prod => prod.ownerId === 'u1');
      })
      .addCase(setProductsthunk.rejected, (state, _) => {
        state.statusproducts = 'error';
      });
  },
});
export const {deleteproduct, updateproduct} = productsSlice.actions;

export default productsSlice.reducer;
