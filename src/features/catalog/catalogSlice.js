import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const base_uri = 'https://handmades-rails-api-backend.herokuapp.com/items';
export const getProducts = createAsyncThunk('catalog/getProducts', async () => {
  const response = await axios.get(base_uri);
  return response.data;
});

export const getProduct = createAsyncThunk('catalog/getProduct', async (id) => {
  const response = await axios.get(`${base_uri}/${id}`);
  console.log('response.data :>> ', response.data);
  return response.data;
});

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    products: [],
    loaders: {},
    errors: {},
    filters: {},
    product: { user: {} },
  },
  reducers: {
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.loaders.loadingProducts = true;
      state.errors.loadingProducts = false;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.loaders.loadingProducts = false;
      state.errors.loadingProducts = false;
    },
    [getProducts.rejected]: (state, action) => {
      state.errors.loadingProducts = action.error.message;
      state.loaders.loadingProducts = false;
    },
    [getProduct.pending]: (state) => {
      state.loaders.loadingProduct = true;
      state.errors.loadingProduct = false;
    },
    [getProduct.fulfilled]: (state, action) => {
      state.product = action.payload;
      state.loaders.loadingProduct = false;
      state.errors.loadingProduct = false;
    },
    [getProduct.rejected]: (state, action) => {
      state.errors.loadingProduct = action.error.message;
      state.loaders.loadingProduct = false;
    },
  },
});

export const { decrement, incrementByAmount } = catalogSlice.actions;

export default catalogSlice.reducer;
