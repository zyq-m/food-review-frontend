import { Navigate, Outlet, useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";

export default function ProtectedRoute({ role }) {
  const { user } = useUser();
  const navigate = useNavigate();

  if (user?.isAuth) {
    if (!role?.includes(user.role_id)) {
      return (
        <div className="grid place-content-center h-screen">
          <div>
            <h2 className="text-3xl mb-4">
              You are not allow to access this page!
            </h2>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => navigate(-1)}
            >
              Go back
            </button>
          </div>
        </div>
      );
    }

    return <Outlet />;
  }

  return <Navigate to="/login" />;
}
