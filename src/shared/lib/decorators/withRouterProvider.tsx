import type { Decorator } from "@storybook/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

interface Props {
  path?: string;
  route?: string;
}

export const withRouterProvider = ({
  path = "/",
  route = "/",
}: Props | undefined = {}) => {
  const decorator: Decorator = (Story) => {
    return (
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path={path} element={<Story />} />
        </Routes>
      </MemoryRouter>
    );
  };

  return decorator;
};
