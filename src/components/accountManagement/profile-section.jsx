export default function ProfileSection() {
  return (
    <div className="flex gap-5 items-start">
      <img
        src="https://static1.squarespace.com/static/656f4e4dababbd7c042c4946/657236350931ee4538eea52c/65baf15103d8ad2826032a8a/1707422532886/how-to-stop-being-a-people-pleaser-1_1.jpg?format=1500w"
        alt=""
        className="h-[100px] rounded-full"
      />

      <div className="flex flex-col gap-4">
        <label className="form-control w-full">
          <div className="label pt-0">
            <span className="label-text">Name</span>
          </div>
          <input
            type="text"
            placeholder="your name"
            className="input input-sm input-bordered w-full"
          />
        </label>
        <label className="form-control w-full">
          <div className="label pt-0">
            <span className="label-text mt-0">Email</span>
          </div>
          <input
            type="email"
            placeholder="your email"
            className="input input-sm input-bordered w-full"
          />
        </label>
        <button className="btn btn-accent btn-sm">Update</button>
      </div>
    </div>
  );
}
