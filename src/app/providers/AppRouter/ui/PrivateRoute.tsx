import type { UserRole } from "@/entities/User";
import { userSelectors } from "@/entities/User";
import { RoutePath } from "@/shared/constants";
import { useAppSelector } from "@/shared/model";
import type { FC, PropsWithChildren } from "react";
import { useMemo } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps extends PropsWithChildren {
  roles?: UserRole[];
}

export const PrivateRoute: FC<PrivateRouteProps> = ({ children, roles }) => {
  const user = useAppSelector(userSelectors.getUserData);
  const isUserHasRoles = useMemo(() => {
    return Boolean(roles?.some((role) => user?.roles?.includes(role)));
  }, [user, roles]);

  if (!user) {
    return <Navigate to={RoutePath.getMainRoute()} replace={true} />;
  }

  if (roles && !isUserHasRoles) {
    return <Navigate to={RoutePath.getForbiddenRoute()} replace={true} />;
  }

  return children;
};
