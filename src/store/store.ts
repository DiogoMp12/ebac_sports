import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import favoriteReducer from './favoriteSlice';
import { api } from './apiSlice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    cart: cartReducer,
    favorite: favoriteReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
