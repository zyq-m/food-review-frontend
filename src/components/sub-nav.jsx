import { Link, useNavigate, useLocation } from "react-router-dom";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import Layout from "./layout";
import useUser from "../hooks/useUser";

export default function SubNav({ children }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { user, setUser } = useUser();

  function onLogout() {
    setUser({});
    window.localStorage.clear();
    navigate("/login");
  }

  return (
    <Layout>
      <div className="flex">
        <nav
          className="w-[169p] flex flex-col justify-between border-r-2 pr-5 mr-5"
          style={{ height: "calc(100vh - 144px)" }}
        >
          <ul className="grid gap-4 text-sm">
            <li
              className={`flex items-center gap-3 px-3 py-2 rounded-md w-fit ${
                pathname == "/profile" ? "bg-gray-100" : ""
              }`}
            >
              <PersonOutlinedIcon fontSize="small" />
              <Link to="/profile">Profile</Link>
            </li>
            <li
              className={`flex items-center gap-3 px-3 py-2 rounded-md w-fit ${
                pathname == "/review" ? "bg-gray-100" : ""
              }`}
            >
              <FormatListBulletedOutlinedIcon fontSize="small" />
              <Link to="/review">Reviews</Link>
            </li>
            {user?.role_id == 2 && (
              <li
                className={`flex items-center gap-3 px-3 py-2 rounded-md w-fit ${
                  pathname == "/my-restaurant" ? "bg-gray-100" : ""
                }`}
              >
                <FormatListBulletedOutlinedIcon fontSize="small" />
                <Link to="/my-restaurant">My Restaurant</Link>
              </li>
            )}
            <li
              className={`flex items-center gap-3 px-3 py-2 rounded-md w-fit ${
                pathname == "/password" ? "bg-gray-100" : ""
              }`}
            >
              <LockOpenOutlinedIcon fontSize="small" />
              <Link to="/password">Password</Link>
            </li>
          </ul>
          <button className="btn btn-error btn-sm w-fit" onClick={onLogout}>
            <LogoutOutlinedIcon fontSize="small" />
            Logout
          </button>
        </nav>
        {/* <div className="divider divider-horizontal"></div> */}
        <div className="flex-1">{children}</div>
      </div>
    </Layout>
  );
}
