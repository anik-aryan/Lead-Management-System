import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
}) {
  const tokenExists =
    document.cookie.includes("token");

  return tokenExists ? (
    children
  ) : (
    <Navigate to="/admin/login" />
  );
}