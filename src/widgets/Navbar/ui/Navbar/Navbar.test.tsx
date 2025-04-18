import { renderWithProviders } from "@/shared/lib/tests";
import { Navbar } from "./Navbar";
import userEvent from "@testing-library/user-event";

describe("Navbar", () => {
  it("Auth modal hidden by default", () => {
    const { getByTestId } = renderWithProviders(<Navbar />);
    expect(getByTestId("Modal")).not.toHaveClass("open");
  });

  it("Auth modal should open", async () => {
    const { getByTestId } = renderWithProviders(<Navbar />);
    await userEvent.click(getByTestId("Navbar.LoginBtn"));
    expect(getByTestId("Modal")).toHaveClass("open");
  });
});
