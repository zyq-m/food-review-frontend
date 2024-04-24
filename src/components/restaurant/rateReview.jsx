import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";

export default function RateReview() {
  return (
    <div>
      <h3 className="font-medium">Rate and review</h3>
      <p className="text-xs text-gray-500">
        Share your experience to help others
      </p>

      <div className="mt-6">
        <textarea
          className="textarea textarea-bordered textarea-sm w-full"
          placeholder="Your experience"
        ></textarea>
        <div className="flex gap-1 justify-end mt-1">
          <button className="btn btn-sm">Cancel</button>
          <button className="btn btn-sm btn-accent">Post</button>
        </div>
      </div>
    </div>
  );
}
