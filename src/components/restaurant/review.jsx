import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

export default function Review({ reviews }) {
  return (
    <div className="grid gap-5">
      {reviews?.map((d, i) => {
        return (
          <div key={i}>
            <div className="flex gap-1 items-center">
              <img
                src="https://static1.squarespace.com/static/656f4e4dababbd7c042c4946/657236350931ee4538eea52c/65baf15103d8ad2826032a8a/1707422532886/how-to-stop-being-a-people-pleaser-1_1.jpg?format=1500w"
                alt=""
                className="w-[26px] h-[26px] rounded-full"
              />
              <div>
                <p className="capitalize text-xs">Mat Amin</p>
                <p className="text-[7px] text-gray-500">11 reviews</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-1 items-baseline w-fit">
              <div className="text-yellow-400">
                <StarOutlinedIcon fontSize="13px" />
                <StarOutlinedIcon fontSize="13px" />
                <StarOutlinedIcon fontSize="13px" />
                <StarOutlinedIcon fontSize="13px" />
                <StarOutlinedIcon fontSize="13px" />
              </div>
              <p className="text-gray-400 text-xs">2 months ago</p>
            </div>

            <p className="text-sm">{d.review}</p>

            {d.edit && (
              <button className="btn btn-xs btn-ghost text-gray-400">
                <EditOutlinedIcon fontSize="5px" />
                Edit review
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
