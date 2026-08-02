/**
 * -----------------------------------------------------------------------------
 * Feature : Routing
 * Ticket  : EEMS-32
 * File    : AppRouter.tsx
 * Description:
 * Application routing with protected and public route guards.
 * -----------------------------------------------------------------------------
 */

import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import DashboardPage from "@/pages/dashboard/DashboardPage";
import LoginPage from "@/features/auth/pages/LoginPage";
import UnauthorizedPage from "@/pages/common/UnauthorizedPage";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        {/* Unauthorized */}
        <Route
          path="/unauthorized"
          element={<UnauthorizedPage />}
        />

        {/* Catch All */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;