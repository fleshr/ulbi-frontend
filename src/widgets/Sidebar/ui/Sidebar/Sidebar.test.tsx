import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { Sidebar } from "./Sidebar";
import { renderWithTranslations } from "@/shared/lib/tests";
import { fireEvent } from "@testing-library/dom";

describe("Sidebar", () => {
  it("Sidebar exist in document", () => {
    const { getByTestId } = renderWithTranslations(
      <ThemeProvider>
        <Sidebar />
      </ThemeProvider>,
    );

    expect(getByTestId("Sidebar")).toBeInTheDocument();
  });

  it("Sidebar collapsed", () => {
    const { getByTestId } = renderWithTranslations(
      <ThemeProvider>
        <Sidebar />
      </ThemeProvider>,
    );

    const toggleButton = getByTestId("Sidebar.Toggle");
    fireEvent.click(toggleButton);
    expect(getByTestId("Sidebar")).toHaveClass("collapsed");
  });
});
