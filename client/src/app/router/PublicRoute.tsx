/**
 * -----------------------------------------------------------------------------
 * Feature : Routing
 * Ticket  : EEMS-32
 * File    : PublicRoute.tsx
 * Description:
 * Prevents authenticated users from accessing public routes.
 * -----------------------------------------------------------------------------
 */

import type { ReactElement } from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "../../features/auth/hooks/useAuth";

interface PublicRouteProps {
  children: ReactElement;
}

const PublicRoute = ({
  children,
}: PublicRouteProps): ReactElement => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default PublicRoute;