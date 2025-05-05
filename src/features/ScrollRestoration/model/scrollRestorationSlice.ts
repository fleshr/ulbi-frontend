import type { PayloadAction, WithSlice } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { ScrollRestorationState } from "./types";

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

declare module "@/shared/model/store" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface LazyLoadedSlices
    extends WithSlice<typeof scrollRestorationSlice> {}
}
