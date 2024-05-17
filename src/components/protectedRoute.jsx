import { Navigate, Outlet } from "react-router-dom";
import useUser from "../hooks/useUser";

export default function ProtectedRoute() {
  const { user } = useUser();

  return !user?.isAuth ? <Navigate to="/login" /> : <Outlet />;
}
