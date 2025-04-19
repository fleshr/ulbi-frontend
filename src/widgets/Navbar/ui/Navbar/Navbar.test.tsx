import { renderWithProviders } from "@/shared/lib/tests";
import { Navbar } from "./Navbar";
import userEvent from "@testing-library/user-event";

describe("Navbar", () => {
  it("Auth modal hidden by default", async () => {
    const { findByTestId } = renderWithProviders(<Navbar />);

    const modal = await findByTestId("Modal");
    expect(modal).toBeInTheDocument();
  });

  it("Auth modal should open", async () => {
    const { findByTestId } = renderWithProviders(<Navbar />);

    const loginBtn = await findByTestId("Navbar.LoginBtn");
    await userEvent.click(loginBtn);

    const modal = await findByTestId("Modal");
    expect(modal).toHaveClass("open");
  });
});
