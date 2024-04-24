import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

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
          <button className="btn btn-accent" onClick={() => navigate("/")}>
            Login
          </button>
          <p className="text-xs text-center">
            Don&apos;t have account?{" "}
            <Link to="/sign-up" className="link link-primary">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
