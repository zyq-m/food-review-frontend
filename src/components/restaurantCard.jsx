import { Link } from "react-router-dom";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

export default function RestaurantCard({ restaurant }) {
  return (
    <div className="grid gap-5 grid-cols-4">
      {restaurant?.map((d) => {
        return (
          <div key={d.restaurant_id}>
            <img
              src={d.restaurant_img[0].src.original}
              alt="Restaurant image"
              className="rounded h-[130px] w-full object-cover"
              loading="lazy"
            />
            <Link to={`/restaurant/${d.restaurant_id}/overview`}>
              <p className="text-xl font-semibold capitalize">
                {d.restaurant_name}
              </p>
            </Link>
            <div className="flex items-center text-yellow-400">
              <span className="text-xs text-gray-500 mr-1">5.0</span>
              <StarOutlinedIcon fontSize="12px" />
              <StarOutlinedIcon fontSize="12px" />
              <StarOutlinedIcon fontSize="12px" />
              <StarOutlinedIcon fontSize="12px" />
              <StarOutlinedIcon fontSize="12px" />
              <span className="text-xs text-gray-500 ml-1">(24)</span>
            </div>
            <p className="text-xs text-gray-500 capitalize">{d.category}</p>
          </div>
        );
      })}
    </div>
  );
}
