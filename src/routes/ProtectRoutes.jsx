import { Navigate, Outlet } from "react-router";

function ProtectRoutes() {
  const isLogIN = true;

  if (!isLogIN) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}

export default ProtectRoutes;
