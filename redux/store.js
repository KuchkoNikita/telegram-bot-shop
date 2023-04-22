import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { cartReducer } from './slice/cartSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const cartPersistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: cartPersistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);