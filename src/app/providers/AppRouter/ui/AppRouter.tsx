import { PageLoader } from "@/shared/ui";
import type { FC } from "react";
import { Suspense, useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../config/router";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter: FC = () => {
  const routes = useMemo(() => {
    return routeConfig.map(({ path, element, authOnly, roles }) => (
      <Route
        key={path}
        path={path}
        element={
          authOnly ? (
            <PrivateRoute roles={roles}>{element}</PrivateRoute>
          ) : (
            element
          )
        }
      />
    ));
  }, []);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>{routes}</Routes>
    </Suspense>
  );
};
