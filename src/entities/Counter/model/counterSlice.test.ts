import {
  counterReducer,
  CounterState,
  decrement,
  increment,
} from "./counterSlice";

describe("counterSlice", () => {
  it("should handle initial state", () => {
    expect(counterReducer(undefined, { type: "unknown" })).toEqual({
      value: 0,
    });
  });

  it("should handle increment", () => {
    const state: CounterState = { value: 10 };
    expect(counterReducer(state, increment())).toEqual({ value: 11 });
  });

  it("should handle decrement", () => {
    const state: CounterState = { value: 10 };
    expect(counterReducer(state, decrement())).toEqual({ value: 9 });
  });
});
