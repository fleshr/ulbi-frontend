import { renderWithProviders } from "@/shared/lib/tests";
import { Counter } from "./Counter";
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
  it("initial state", () => {
    const { getByTestId } = renderWithProviders(<Counter />);
    expect(getByTestId("Counter.Value")).toHaveTextContent("0");
  });

  it("increment", async () => {
    const { getByTestId } = renderWithProviders(<Counter />);
    const incrementBtn = getByTestId("Counter.IncrementBtn");
    await userEvent.click(incrementBtn);
    expect(getByTestId("Counter.Value")).toHaveTextContent("1");
  });

  it("decrement", async () => {
    const { getByTestId } = renderWithProviders(<Counter />);
    const decrementBtn = getByTestId("Counter.DecrementBtn");
    await userEvent.click(decrementBtn);
    expect(getByTestId("Counter.Value")).toHaveTextContent("-1");
  });
});
