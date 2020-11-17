import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const base_uri =
  'https://handmades-rails-api-backend.herokuapp.com/api/v1/auth';

export const login = createAsyncThunk(
  'user/login',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${base_uri}/sign_in`, data);
      const {
        data: { data: user },
        headers,
      } = response;
      const header = {
        'access-token': headers['access-token'],
        client: headers.client,
        uid: headers.uid,
      };
      return { user, header };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const signUp = createAsyncThunk(
  'user/signUp',
  async (data, { rejectWithValue }) => {
    console.log('data :>> ', data);
    try {
      const response = await axios.post(base_uri, data);
      const {
        data: { data: user },
        headers,
      } = response;
      const header = {
        'access-token': headers['access-token'],
        client: headers.client,
        uid: headers.uid,
      };
      console.log('user :>> ', user);
      console.log('header :>> ', header);
      return { user, header };
    } catch (error) {
      return rejectWithValue(error.response.data.errors.full_messages);
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    loaders: {},
    errors: {},
    headers: {},
    loggedIn: false,
  },
  reducers: {
    logout: (state) => {
      state.user = {};
      state.headers = {};
      state.loggedIn = false;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.loaders.login = true;
      state.errors.login = false;
    },
    [login.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.headers = action.payload.header;
      state.loggedIn = true;
      state.loaders.login = false;
      state.errors.login = false;
    },
    [login.rejected]: (state, action) => {
      state.errors.login = action.payload.errors;
      state.loaders.login = false;
    },
    [signUp.pending]: (state) => {
      state.loaders.signUp = true;
      state.errors.signUp = false;
    },
    [signUp.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.headers = action.payload.header;
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

export const { logout, incrementByAmount } = userSlice.actions;

export const selectCount = (state) => state.counter.value;

export default userSlice.reducer;
