import { Button } from "./Button";
import { render } from "@testing-library/react";

describe("Button", () => {
  it("Button exist", () => {
    const { getByTestId } = render(<Button>test</Button>);

    expect(getByTestId("Button")).toBeInTheDocument();
  });

  it("Clear variant", () => {
    const { getByTestId } = render(<Button>test</Button>);

    expect(getByTestId("Button")).toHaveClass("clear");
  });
});
