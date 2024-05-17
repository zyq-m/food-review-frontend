import { useState } from "react";
import { useForm } from "react-hook-form";

export default function RestaurantDetails() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onUpdate(data) {
    console.log(data);
    console.log(errors);
  }

  return (
    <form onSubmit={handleSubmit(onUpdate)} className="mb-6">
      <h2 className="font-semibold mb-4">Restaurant Details</h2>

      <div className="grid grid-cols-6 gap-4 mb-6">
        <label className="form-control w-full col-span-3">
          <div className="label pt-0">
            <span className="label-text">Restaurant Name</span>
          </div>
          <input
            type="text"
            placeholder=""
            className="input input-sm input-bordered w-full"
            {...register("restaurant_name")}
          />
        </label>
        <label className="form-control w-full col-span-3">
          <div className="label pt-0">
            <span className="label-text">Category</span>
          </div>
          <select
            className="select select-bordered select-sm"
            {...register("category", { required: true })}
          >
            <option value="">Pick one</option>
            <option value="op 1">Han Solo</option>
            <option value="op 2">Greedo</option>
          </select>
        </label>
        <label className="form-control w-full col-span-2">
          <div className="label pt-0">
            <span className="label-text">Phone No</span>
          </div>
          <input
            type="tel"
            placeholder=""
            className="input input-sm input-bordered w-full"
            {...register("phone_no")}
          />
        </label>
        <label className="form-control w-full col-span-2">
          <div className="label pt-0">
            <span className="label-text">Website Link</span>
          </div>
          <input
            type="url"
            placeholder=""
            className="input input-sm input-bordered w-full"
            {...register("website_link")}
          />
        </label>
        <label className="form-control w-full col-span-2">
          <div className="label pt-0">
            <span className="label-text">Location</span>
          </div>
          <input
            type="text"
            placeholder=""
            className="input input-sm input-bordered w-full"
            {...register("location")}
          />
        </label>
        <label className="form-control col-span-6">
          <div className="label">
            <span className="label-text">Restaurant Description</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24 textarea-sm"
            placeholder="Tell us about your restaurant"
            {...register("location")}
          ></textarea>
        </label>
      </div>

      <h2 className="font-semibold mb-4">Open Hours</h2>
      <div className="grid grid-cols-2 gap-4 mb-7">
        <label className="form-control w-full">
          <div className="label pt-0">
            <span className="label-text">Day from</span>
          </div>
          <select
            className="select select-bordered select-sm"
            {...register("dayFrom", { required: true })}
          >
            <option value="">Pick one</option>
            <option value="Sunday">Sunday</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
          </select>
        </label>
        <label className="form-control w-full">
          <div className="label pt-0">
            <span className="label-text">Day to</span>
          </div>
          <select
            className="select select-bordered select-sm"
            {...register("dayTo", { required: true })}
          >
            <option value="">Pick one</option>
            <option value="Sunday">Sunday</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
          </select>
        </label>
        <label className="form-control w-full">
          <div className="label pt-0">
            <span className="label-text">Time from</span>
          </div>
          <input
            type="time"
            className="input input-sm input-bordered w-full"
            {...register("timeFrom", { required: true })}
          />
        </label>
        <label className="form-control w-full">
          <div className="label pt-0">
            <span className="label-text">Time to</span>
          </div>
          <input
            type="time"
            className="input input-sm input-bordered w-full"
            {...register("timeTo", { required: true })}
          />
        </label>
      </div>

      <button type="submit" className="btn btn-accent btn-sm">
        Update
      </button>
    </form>
  );
}
