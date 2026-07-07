import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { useAuthStore } from "../store/authStore";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({
  children,
}: ProtectedRouteProps) {
  const token = useAuthStore((s) => s.token);

  const user = useAuthStore((s) => s.user);

  const location = useLocation();

  if (!token) {
    return <Navigate to="/" replace />;
  }

  const profile = (user as any)?.profile;

  const profileComplete =
    profile?.careerGoal &&
    profile.careerGoal.trim() !== "";

  if (
    !profileComplete &&
    location.pathname !== "/profile-setup"
  ) {
    return (
      <Navigate
        to="/profile-setup"
        replace
      />
    );
  }

  return <>{children}</>;
}