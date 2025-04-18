import { Sidebar } from "./Sidebar";
import { fireEvent } from "@testing-library/dom";
import { renderWithProviders } from "@/shared/lib/tests";

describe("Sidebar", () => {
  it("Sidebar exist in document", () => {
    const { getByTestId } = renderWithProviders(<Sidebar />);

    expect(getByTestId("Sidebar")).toBeInTheDocument();
  });

  it("Sidebar collapsed", () => {
    const { getByTestId } = renderWithProviders(<Sidebar />);

    const toggleButton = getByTestId("Sidebar.Toggle");
    fireEvent.click(toggleButton);
    expect(getByTestId("Sidebar")).toHaveClass("collapsed");
  });
});
