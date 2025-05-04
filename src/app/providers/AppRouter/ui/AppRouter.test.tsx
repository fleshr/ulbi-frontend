import { mockUser, UserRole } from "@/entities/User";
import { RoutePath } from "@/shared/constants";
import { renderWithProviders } from "@/shared/lib/tests";
import { AppRouter } from "./AppRouter";

describe("AppRouter", () => {
  it("Render correct page", async () => {
    const { findByTestId } = renderWithProviders(<AppRouter />, {
      router: RoutePath.getAboutRoute(),
    });

    const page = await findByTestId("AboutPage");
    expect(page).toBeInTheDocument();
  });

  it("Redirect to main page if not authentificated", async () => {
    const { findByTestId } = renderWithProviders(<AppRouter />, {
      router: RoutePath.getArticlesRoute(),
    });

    const page = await findByTestId("MainPage");
    expect(page).toBeInTheDocument();
  });

  it("Show page if authentificated", async () => {
    const { findByTestId } = renderWithProviders(<AppRouter />, {
      preloadedState: { user: { user: mockUser, _initialized: true } },
      router: RoutePath.getArticlesRoute(),
    });

    const page = await findByTestId("ArticlesPage");
    expect(page).toBeInTheDocument();
  });

  it("Redirect to forbidden page user don't have roles", async () => {
    const { findByTestId } = renderWithProviders(<AppRouter />, {
      preloadedState: { user: { user: mockUser, _initialized: true } },
      router: RoutePath.getAdminPanelRoute(),
    });

    const page = await findByTestId("ForbiddenPage");
    expect(page).toBeInTheDocument();
  });

  it("Show page to user with roles", async () => {
    const { findByTestId } = renderWithProviders(<AppRouter />, {
      preloadedState: {
        user: {
          user: { ...mockUser, roles: [UserRole.ADMIN] },
          _initialized: true,
        },
      },
      router: RoutePath.getAdminPanelRoute(),
    });

    const page = await findByTestId("AdminPanelPage");
    expect(page).toBeInTheDocument();
  });
});
