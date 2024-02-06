import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer.js";
import logger from "redux-logger";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    process.env.NODE_ENV !== "production"
      ? getDefaultMiddleware().concat(logger)
      : getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
