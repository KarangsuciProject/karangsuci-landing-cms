import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { useDispatch } from 'react-redux';
import storage from 'redux-persist/es/storage';

import rootReducer from './reducer';

import type { AppDispatch } from './store.type';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const reducers = combineReducers(rootReducer);

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const persistor = persistStore(store);
