import SubNav from "../components/sub-nav";

export default function Password() {
  return (
    <SubNav>
      <div className="flex flex-col gap-4">
        <label className="form-control w-full">
          <div className="label pt-0">
            <span className="label-text">Current password</span>
          </div>
          <input
            type="password"
            placeholder=""
            className="input input-sm input-bordered w-full"
          />
        </label>
        <label className="form-control w-full">
          <div className="label pt-0">
            <span className="label-text">New password</span>
          </div>
          <input
            type="password"
            placeholder=""
            className="input input-sm input-bordered w-full"
          />
        </label>
        <label className="form-control w-full">
          <div className="label pt-0">
            <span className="label-text">Confirm password</span>
          </div>
          <input
            type="password"
            placeholder=""
            className="input input-sm input-bordered w-full"
          />
        </label>
        <button className="btn btn-accent btn-sm">Update</button>
      </div>
    </SubNav>
  );
}
