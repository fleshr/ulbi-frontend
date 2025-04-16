import { routeConfig } from "@/shared/config";
import { PageLoader } from "@/shared/ui";
import { FC, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

export const AppRouter: FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routeConfig.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Routes>
    </Suspense>
  );
};
