import SubNav from "../components/sub-nav";
import useUser from "../hooks/useUser";
import { useForm } from "react-hook-form";
import { api } from "../api/api";
import { useState } from "react";

export default function Profile() {
  const { user, setUser } = useUser();
  const { register, handleSubmit } = useForm();
  const [temp, setTemp] = useState(""); // temporary avatar
  const url = import.meta.env.VITE_API;

  async function onProfile(data) {
    try {
      const res = await api.put(`/user/profile/${user.user_name}`, data);
      setUser((prev) => ({ ...prev, name: res.data.user.name }));
    } catch (error) {
      console.log(error);
    }
  }

  async function avatar(data) {
    try {
      const formData = new FormData();
      formData.append("avatar", data.avatar[0]);

      const res = await await api.put(
        `/user/profile/${user.user_name}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setUser((prev) => ({ ...prev, avatar: res.data.avatar }));
      setTemp("");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <SubNav>
      <div className="flex gap-8 items-start">
        <form onSubmit={handleSubmit(avatar)}>
          {temp ? (
            <img
              src={temp}
              alt=""
              className="h-[100px] w-[100px] object-cover rounded-full"
              onClick={() => window.document.getElementById("avatar").click()}
            />
          ) : (
            <img
              src={
                user.avatar ? `${url}/${user.avatar?.src}` : "/user-profile.jpg"
              }
              alt=""
              className="h-[100px] w-[100px] object-cover rounded-full"
              onClick={() => window.document.getElementById("avatar").click()}
            />
          )}
          <input
            id="avatar"
            type="file"
            className="hidden"
            accept="image/*"
            {...register("avatar", {
              onChange: (data) => {
                setTemp(URL.createObjectURL(data.target.files[0]));
              },
            })}
          />
          <button type="submit" className="btn btn-sm w-full mt-2">
            Upload
          </button>
        </form>

        <form
          onSubmit={handleSubmit(onProfile)}
          className="flex flex-col gap-4"
        >
          <label className="form-control w-full">
            <div className="label pt-0">
              <span className="label-text">Name</span>
            </div>
            <input
              type="text"
              placeholder="your name"
              className="input input-sm input-bordered w-full"
              {...register("name", { value: user?.name })}
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
              {...register("email", { value: user?.email })}
            />
          </label>
          <button type="submit" className="btn btn-accent btn-sm">
            Update
          </button>
        </form>
      </div>
    </SubNav>
  );
}
