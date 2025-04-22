import { rootReducer } from "@/app/providers/StoreProvider/config/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddCommentFormState } from "./types";

const initialState: AddCommentFormState = {
  error: undefined,
  isLoading: false,
  text: "",
};

export const addCommentFormSlice = createSlice({
  name: "addCommentForm",
  initialState,
  selectors: {
    getText: (state) => state.text,
  },
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

const injectedAddCommentFormSlice = addCommentFormSlice.injectInto(rootReducer);
export const addCommentFormReducer = injectedAddCommentFormSlice.reducer;
export const addCommentFormActions = injectedAddCommentFormSlice.actions;
export const addCommentFormSelectors = injectedAddCommentFormSlice.selectors;
