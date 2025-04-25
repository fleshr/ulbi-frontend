import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ScrollRestorationState } from "./types";

const initialState: ScrollRestorationState = {};

export const scrollRestorationSlice = createSlice({
  name: "scrollRestoration",
  initialState,
  reducers: {
    setScrollPositon: (
      state,
      { payload }: PayloadAction<{ path: string; scroll: number }>,
    ) => {
      state[payload.path] = payload.scroll;
    },
  },
});

export const scrollRestorationActions = scrollRestorationSlice.actions;
export const scrollRestorationSelectors = scrollRestorationSlice.selectors;
