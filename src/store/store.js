import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import testSlice from "./slices/testSlice";
import createWebStorage from "redux-persist/es/storage/createWebStorage";

const reducers = combineReducers({
  testSlice
})

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  }
}

const storage = typeof window === "undefined" ? createNoopStorage() : createWebStorage("local");

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/REGISTER'],
      },
    }),
})

export default store;