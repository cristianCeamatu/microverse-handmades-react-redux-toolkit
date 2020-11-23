/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUri = 'https://handmades-rails-api-backend.herokuapp.com/api/v1/auth';
// const baseUri = 'http://localhost:3000/api/v1/auth';

export const login = createAsyncThunk('user/login', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${baseUri}/sign_in`, data);
    const {
      data: { data: user },
      headers,
    } = response;
    const header = {
      'access-token': headers['access-token'],
      client: headers.client,
      uid: headers.uid,
    };
    localStorage.setItem('currentUser', JSON.stringify({ user, header }));

    return { user, header };
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const signUp = createAsyncThunk('user/signUp', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post(baseUri, data);
    const {
      data: { data: user },
      headers,
    } = response;
    const header = {
      'access-token': headers['access-token'],
      client: headers.client,
      uid: headers.uid,
    };
    localStorage.setItem('currentUser', JSON.stringify({ user, header }));

    return { user, header };
  } catch (error) {
    return rejectWithValue(error.response.data.errors.full_messages);
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    loaders: {},
    errors: {},
    loggedIn: false,
  },
  reducers: {
    logout: state => {
      localStorage.removeItem('currentUser');
      state.user = {};
      state.headers = {};
      state.loggedIn = false;
    },
    loginFromStorage: (state, action) => {
      state.user = action.payload;
      state.loggedIn = true;
    },
  },
  extraReducers: {
    [login.pending]: state => {
      state.loaders.login = true;
      state.errors.login = false;
    },
    [login.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.loggedIn = true;
      state.loaders.login = false;
      state.errors.login = false;
    },
    [login.rejected]: (state, action) => {
      state.errors.login = action.payload.errors;
      state.loaders.login = false;
    },
    [signUp.pending]: state => {
      state.loaders.signUp = true;
      state.errors.signUp = false;
    },
    [signUp.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.loggedIn = true;
      state.loaders.signUp = false;
      state.errors.signUp = false;
    },
    [signUp.rejected]: (state, action) => {
      state.errors.signUp = action.payload;
      state.loaders.signUp = false;
    },
  },
});

export const { logout, loginFromStorage } = userSlice.actions;

export const selectCount = state => state.counter.value;

export default userSlice.reducer;
