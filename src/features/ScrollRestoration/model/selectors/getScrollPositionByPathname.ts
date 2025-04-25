import { createSelector } from "@reduxjs/toolkit";

export const getScrollPositionByPathname = createSelector(
  (state: RootState) => state.scrollRestoration,
  (_state: RootState, path: string) => path,
  (state, path) => state[path],
);
