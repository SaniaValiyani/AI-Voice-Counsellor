import { createBrowserRouter } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import CounsellorPage from "../pages/CounsellorPage";
import AnalyticsPage from "../pages/AnalyticsPage";
import ReportsPage from "../pages/ReportsPage";
import SettingsPage from "../pages/SettingsPage";
import RegisterPage from "../pages/RegisterPage";
import { useAuthStore } from "../store/authStore";
import { Navigate } from "react-router-dom";
import ProfilePage from "../pages/ProfilePage";


function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const authenticated =
    useAuthStore(
      (state) =>
        state.isAuthenticated
    );

  if (!authenticated) {
    return (
      <Navigate to="/" replace />
    );
  }

  return children;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path:"/register",
    element:<RegisterPage/>
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/counsellor",
    element: (
      <ProtectedRoute>
        <CounsellorPage />
      </ProtectedRoute>
    ),
  },

  {
    path: "/analytics",
    element: <AnalyticsPage />,
  },
  {
    path: "/reports",
    element: <ReportsPage />,
  },
  {
    path: "/settings",
    element: <SettingsPage />,
  },
  {
    path:"/profile",
    element:<ProfilePage/>
  },
]);