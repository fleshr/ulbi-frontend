import { userSelectors } from "@/entities/User";
import { RoutePath } from "@/shared/config";
import { useAppSelector } from "@/shared/model";
import { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const user = useAppSelector(userSelectors.getUserData);

  if (!user) {
    return <Navigate to={RoutePath.main} />;
  }

  return children;
};
