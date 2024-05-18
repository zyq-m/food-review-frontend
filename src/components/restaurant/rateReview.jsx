import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import useUser from "../../hooks/useUser";
import { useForm } from "react-hook-form";
import { api } from "../../api/api";
import { useParams } from "react-router-dom";

export default function RateReview() {
  const { user } = useUser();
  const { register, handleSubmit } = useForm();
  const { restaurantId } = useParams();

  async function onReview(data) {
    try {
      data.email = user.email;
      data.restaurant_id = restaurantId;

      const res = await api.post("/review", data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <h3 className="font-medium">Rate and review</h3>
      <p className="text-xs text-gray-500">
        Share your experience to help others
      </p>

      <form onSubmit={handleSubmit(onReview)} className="mt-6">
        <textarea
          className="textarea textarea-bordered textarea-sm w-full"
          placeholder="Your experience"
          {...register("review")}
        ></textarea>
        <div className="flex gap-1 justify-end mt-1">
          <button type="reset" className="btn btn-sm">
            Cancel
          </button>
          <button type="submit" className="btn btn-sm btn-accent">
            Post
          </button>
        </div>
      </form>
    </div>
  );
}
