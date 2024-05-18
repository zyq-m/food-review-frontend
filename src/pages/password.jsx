import { useForm } from "react-hook-form";
import SubNav from "../components/sub-nav";
import { api } from "../api/api";
import useUser from "../hooks/useUser";

export default function Password() {
  const { register, handleSubmit } = useForm();
  const { user } = useUser();

  async function onChangePassword(data) {
    try {
      data.email = user.email;
      const res = await api.put("/user/password", data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SubNav>
      <form
        onSubmit={handleSubmit(onChangePassword)}
        className="flex flex-col gap-4"
      >
        <label className="form-control w-full">
          <div className="label pt-0">
            <span className="label-text">Current password</span>
          </div>
          <input
            type="password"
            placeholder=""
            className="input input-sm input-bordered w-full"
            {...register("password", { required: true })}
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
            {...register("new_password", { required: true })}
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
            {...register("re_password", { required: true })}
          />
        </label>
        <button type="submit" className="btn btn-accent btn-sm">
          Update
        </button>
      </form>
    </SubNav>
  );
}
