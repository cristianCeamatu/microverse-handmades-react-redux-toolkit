import { configureStore } from '@reduxjs/toolkit';
import catalogReducer from '../features/catalog/catalogSlice';
import userReducer from '../features/user/userSlice';

export default configureStore({
  reducer: {
    catalog: catalogReducer,
    user: userReducer,
  },
});
