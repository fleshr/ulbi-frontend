import { routeConfig } from "@/shared/config";
import { FC, Suspense } from "react";
import { Routes, Route } from "react-router";

export const AppRouter: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routeConfig.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Routes>
    </Suspense>
  );
};
