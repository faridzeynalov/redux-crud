import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./Slices/categoriesSlice";
import { categoriesApi } from "./Slices/categoriesApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoriesApi.middleware),
});


setupListeners(store.dispatch);
