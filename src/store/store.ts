import { configureStore } from '@reduxjs/toolkit';
import formsReducer from './formsSlice';
import countriesReducer from './countriesSlice';

export default configureStore({
  reducer: {
    forms: formsReducer,
    countries: countriesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
