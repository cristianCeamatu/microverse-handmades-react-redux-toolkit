import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk('catalog/getProducts', async () => {
  const response = await axios.get(
    'https://bookstore-backend-rails.herokuapp.com/books/'
  );
  return response.data;
});

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    products: [],
    loaders: {},
    errors: {},
    filters: {},
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
    //   [getBooks.pending]: (state) => {
    //     state.loaders.loadingBooks = true;
    //     state.errors.loadingBooks = false;
    //   },
    //   [getBooks.fulfilled]: (state, action) => {
    //     state.books = action.payload;
    //     state.loaders.loadingBooks = false;
    //     state.errors.loadingBooks = false;
    //   },
    //   [getBooks.rejected]: (state, action) => {
    //     state.errors.loadingBooks = action.error.message;
    //     state.loaders.loadingBooks = false;
    //   },
  },
});

export const { decrement, incrementByAmount } = catalogSlice.actions;

export const selectCount = (state) => state.counter.value;

export default catalogSlice.reducer;
