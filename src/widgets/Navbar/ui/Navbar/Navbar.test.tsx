import { renderWithProviders } from "@/shared/lib/tests";
import userEvent from "@testing-library/user-event";
import { Navbar } from "./Navbar";

describe("Navbar", () => {
  it("Auth modal hidden by default", () => {
    const { getByTestId } = renderWithProviders(<Navbar />);

    const modal = getByTestId("Modal");
    expect(modal).not.toHaveClass("open");
  });

  it("Auth modal should open", async () => {
    const { getByTestId } = renderWithProviders(<Navbar />);

    const loginBtn = getByTestId("Navbar.LoginBtn");
    await userEvent.click(loginBtn);

    const modal = getByTestId("Modal");
    expect(modal).toHaveClass("open");
  });
});
