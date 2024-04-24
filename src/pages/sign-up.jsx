import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

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
        <div className="mt-8 grid gap-4 max-w-sm">
          <label className="form-control w-full">
            <div className="label pt-0">
              <span className="label-text">Email</span>
            </div>
            <input
              type="email"
              placeholder="your-email.com"
              className="input input-bordered w-full"
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
            />
          </label>
          <button className="btn btn-accent" onClick={() => navigate("/login")}>
            Sign up
          </button>
          <p className="text-xs text-center">
            Already have account?{" "}
            <Link to="/login" className="link link-primary">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
