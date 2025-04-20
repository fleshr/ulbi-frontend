import { renderWithProviders } from "@/shared/lib/tests";
import { fireEvent } from "@testing-library/dom";
import { Sidebar } from "./Sidebar";

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
