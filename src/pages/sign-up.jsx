import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../api/api";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  async function onSignup(e) {
    e.preventDefault();

    try {
      const res = api.post("/sign-up", {
        username: form.username,
        email: form.email,
        password: form.password,
      });
      console.log(res);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex items-center min-h-screen gap-16">
      <div>
        <img
          src="https://malay-cuisines.neocities.org/intro.jpg"
          alt=""
          className="h-screen max-w-[455px] object-cover"
        />
      </div>
      <div>
        <h1 className="text-5xl font-bold">Lapor.com</h1>
        <p className="text-gray-400">
          A locale where you discover the finest dining experience
        </p>
        <form className="mt-8 grid gap-4 max-w-sm" onSubmit={onSignup}>
          <label className="form-control w-full">
            <div className="label pt-0">
              <span className="label-text">Username</span>
            </div>
            <input
              type="text"
              placeholder="your username"
              className="input input-bordered w-full"
              onChange={(e) =>
                setForm((prev) => ({ ...prev, username: e.target.value }))
              }
            />
          </label>
          <label className="form-control w-full">
            <div className="label pt-0">
              <span className="label-text">Email</span>
            </div>
            <input
              type="email"
              placeholder="your-email.com"
              className="input input-bordered w-full"
              onChange={(e) =>
                setForm((prev) => ({ ...prev, email: e.target.value }))
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
                setForm((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </label>
          <button type="submit" className="btn btn-accent">
            Sign up
          </button>
        </form>
        <p className="text-xs text-center mt-4">
          Already have account?{" "}
          <Link to="/login" className="link link-primary">
            Login here
          </Link>
        </p>
        <p className="text-xs text-center mt-1">
          Create your restaurant{" "}
          <Link to="/sign-up/restaurant" className="link link-primary">
            here
          </Link>
        </p>
      </div>
    </div>
  );
}
