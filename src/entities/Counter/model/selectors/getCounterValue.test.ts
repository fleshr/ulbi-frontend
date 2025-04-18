import { getCounterValue } from "./getCounterValue";

describe("getCounterValue", () => {
  it("should return counter value", () => {
    const state = { counter: { value: 10 } } as RootState;
    expect(getCounterValue(state)).toBe(10);
  });
});
