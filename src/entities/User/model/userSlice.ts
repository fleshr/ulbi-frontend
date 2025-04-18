import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./types";

const initialState: UserState = { user: null };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const userReducer = userSlice.reducer;
