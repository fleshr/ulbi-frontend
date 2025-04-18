import { counterReducer } from "@/entities/Counter";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({ counter: counterReducer });

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
