import { Sidebar } from "./Sidebar";
import { fireEvent } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { withProviders } from "@/shared/lib/tests";

describe("Sidebar", () => {
  it("Sidebar exist in document", () => {
    const { getByTestId } = render(withProviders(<Sidebar />));

    expect(getByTestId("Sidebar")).toBeInTheDocument();
  });

  it("Sidebar collapsed", () => {
    const { getByTestId } = render(withProviders(<Sidebar />));

    const toggleButton = getByTestId("Sidebar.Toggle");
    fireEvent.click(toggleButton);
    expect(getByTestId("Sidebar")).toHaveClass("collapsed");
  });
});
