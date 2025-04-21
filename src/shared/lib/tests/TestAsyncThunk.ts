import { ThunkOptions } from "@/app/providers/StoreProvider/config/store";
import { AsyncThunkAction, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

type ActionCreator<Returned, ThunkArg, RejectedValue> = (
  arg: ThunkArg,
) => AsyncThunkAction<Returned, ThunkArg, ThunkOptions<RejectedValue>>;

jest.mock("axios");
const mockedAxios = jest.mocked(axios);

export class TestAsyncThunk<Returned, ThunkArg, RejectedValue> {
  api = mockedAxios;
  dispatch: Dispatch = jest.fn();
  getState: () => RootState;

  constructor(
    private thunk: ActionCreator<Returned, ThunkArg, RejectedValue>,
    initialState?: Partial<RootState>,
  ) {
    this.getState = jest.fn(() => initialState as RootState);
  }

  async callThunk(arg: ThunkArg) {
    const action = this.thunk(arg);
    const result = await action(this.dispatch, this.getState, {
      api: this.api,
    });
    return result;
  }
}
