import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../api/api";

export default function SignupRestaurant() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    restaurant_name: "",
    category: "",
    phone_no: "",
  });

  async function onSignup(e) {
    e.preventDefault();

    try {
      const res = api.post("/sign-up/restaurant", form);
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
        <form className="mt-8 grid gap-4" onSubmit={onSignup}>
          <div className="flex gap-4">
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
          </div>
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

          <div className="flex gap-4 mt-4">
            <label className="form-control w-full">
              <div className="label pt-0">
                <span className="label-text">Restaurant Name</span>
              </div>
              <input
                type="text"
                placeholder="Name your restaurant"
                className="input input-bordered w-full"
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    restaurant_name: e.target.value,
                  }))
                }
              />
            </label>
            <label className="form-control w-full">
              <div className="label pt-0">
                <span className="label-text">Phone No.</span>
              </div>
              <input
                type="tel"
                placeholder="01xxxxx"
                className="input input-bordered w-full"
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, phone_no: e.target.value }))
                }
              />
            </label>
          </div>
          <label className="form-control w-full">
            <div className="label pt-0">
              <span className="label-text">Category</span>
            </div>
            <select
              className="select select-bordered"
              onChange={(e) =>
                setForm((prev) => ({ ...prev, category: e.target.value }))
              }
            >
              <option disabled selected>
                Pick one
              </option>
              <option value="op 1">Han Solo</option>
              <option value="op 2">Greedo</option>
            </select>
          </label>
          <button type="submit" className="btn btn-accent">
            Sign up
          </button>
          <p className="text-xs text-center">
            Already have account?{" "}
            <Link to="/login" className="link link-primary">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
