import { Link } from "react-router-dom";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

import { restaurant } from "../data/restaurant";

export default function RestaurantCard() {
  return (
    <div className="grid gap-5 grid-cols-4">
      {restaurant?.map((d, i) => {
        return (
          <div key={i}>
            <img
              src={d.img}
              alt="Restaurant image"
              className="rounded h-[130px] w-full object-cover"
            />
            <Link to={`/restaurant/${d.id}/overview`}>
              <p className="text-xl font-semibold capitalize">{d.name}</p>
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
            <p className="text-xs text-gray-500">{d.category}</p>
          </div>
        );
      })}
    </div>
  );
}
