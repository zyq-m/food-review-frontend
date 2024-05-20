import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";
import { useEffect } from "react";
import { api } from "../api/api";

export default function Header() {
  const { user, setUser } = useUser();
  const url = import.meta.env.VITE_API;

  useEffect(() => {
    !user?.avatar &&
      api.get(`/user/profile/${user.user_name}`).then((res) => {
        const data = res.data.user;

        setUser((prev) => ({
          ...prev,
          email: data.email,
          avatar: data.avatar,
          name: data.name,
        }));
      });
  }, [user?.avatar]);

  return (
    <nav className="flex justify-between my-6">
      <Link to="/" className="text-xl font-extrabold">
        Lapor.com
      </Link>

      <div className="flex gap-3">
        <label className="input input-sm input-bordered flex items-center gap-2 rounded-full">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <div>
          <Link to="/profile">
            <img
              src={
                user.avatar ? `${url}/${user.avatar.src}` : "/user-profile.jpg"
              }
              alt=""
              className="w-8 h-8 object-cover rounded-full"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
