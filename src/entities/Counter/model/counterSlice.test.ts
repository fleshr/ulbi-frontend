import type { CounterState } from "./counterSlice";
import { counterActions, counterReducer } from "./counterSlice";

describe("counterSlice", () => {
  it("should handle initial state", () => {
    expect(counterReducer(undefined, { type: "unknown" })).toEqual({
      value: 0,
    });
  });

  it("should handle increment", () => {
    const state: CounterState = { value: 10 };
    expect(counterReducer(state, counterActions.increment())).toEqual({
      value: 11,
    });
  });

  it("should handle decrement", () => {
    const state: CounterState = { value: 10 };
    expect(counterReducer(state, counterActions.decrement())).toEqual({
      value: 9,
    });
  });
});
