import { createSlice } from "@reduxjs/toolkit";
import { ProfileState } from "./types";

const initialState: ProfileState = {
  data: undefined,
  isLoading: false,
  error: undefined,
  readonly: true,
};

export const counterSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
});

export const counterReducer = counterSlice.reducer;
