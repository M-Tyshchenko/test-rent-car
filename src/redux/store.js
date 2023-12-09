import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { carsReducer } from './carsSlice';
import { filterReducer } from './filterSlice';
import { modalReducer } from './modalSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedCarsReducer = persistReducer(persistConfig, carsReducer);

export const store = configureStore({
  reducer: {
    cars: persistedCarsReducer,
    filter: filterReducer,
    modal: modalReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
