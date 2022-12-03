import { Navigate } from "react-router-dom";
import Auth from "utils/auth";

export default function ProtectedRoute() {
  if (Auth.isAuthorization()) {
    return <Navigate to="/admin-dashboard/dashboard" replace />;
  }

  return <Navigate to="/" />;
}