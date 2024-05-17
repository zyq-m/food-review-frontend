import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../api/api";
import useUser from "../hooks/useUser";
import { jwtDecode } from "jwt-decode";

export default function Login() {
  const navigate = useNavigate();
  const [credintial, setCredentials] = useState({ email: "", password: "" });
  const { setUser } = useUser();

  async function onLogin(e) {
    e.preventDefault();

    try {
      const res = await api.post("/login", {
        email: credintial.email,
        password: credintial.password,
      });
      const token = res.data.access_token;
      const { sub } = jwtDecode(token);
      sub.isAuth = true;

      setUser(sub);
      window.localStorage.setItem("access_token", token);

      navigate("/");
    } catch (error) {
      console.log(error);
      if (error.response.status == 404) alert(error.response.data.message);
    }
  }

  return (
    <div className="flex items-center min-h-screen gap-16">
      <div>
        <img
          src="https://miragas.com.my/wp-content/uploads/2022/08/article1-20220803-02.png"
          alt=""
          className="h-screen max-w-[455px] object-cover"
        />
      </div>
      <div>
        <h1 className="text-5xl font-bold">Lapor.com</h1>
        <p className="text-gray-400">
          A locale where you discover the finest dining experience
        </p>
        <form className="mt-8 grid gap-4 max-w-sm" onSubmit={onLogin}>
          <label className="form-control w-full">
            <div className="label pt-0">
              <span className="label-text">Email</span>
            </div>
            <input
              type="email"
              placeholder="your-email.com"
              className="input input-bordered w-full"
              onChange={(e) =>
                setCredentials((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </label>
          <label className="form-control w-full">
            <div className="label pt-0">
              <span className="label-text">Password</span>
            </div>
            <input
              type="password"
              placeholder="your password"
              className="input input-bordered w-full"
              onChange={(e) =>
                setCredentials((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
            />
          </label>
          <button type="submit" className="btn btn-accent">
            Login
          </button>
          <p className="text-xs text-center">
            Don&apos;t have account?{" "}
            <Link to="/sign-up" className="link link-primary">
              Sign up here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
