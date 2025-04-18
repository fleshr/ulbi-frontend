import { getCounter } from "./getCounter";

describe("getCounter", () => {
  it("should return counter", () => {
    const state = { counter: { value: 10 } } as RootState;
    expect(getCounter(state)).toEqual({ value: 10 });
  });
});
