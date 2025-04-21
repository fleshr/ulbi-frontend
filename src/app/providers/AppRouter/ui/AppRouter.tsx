import { routeConfig } from "@/shared/config";
import { PageLoader } from "@/shared/ui";
import { FC, Suspense, useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter: FC = () => {
  const routes = useMemo(() => {
    return routeConfig.map(({ path, element, authOnly }) => (
      <Route
        key={path}
        path={path}
        element={authOnly ? <PrivateRoute>{element}</PrivateRoute> : element}
      />
    ));
  }, []);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>{routes}</Routes>
    </Suspense>
  );
};
