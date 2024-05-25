import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

import Review from "../review";
import Highlight from "../highlight";
import RateReview from "../rateReview";

export default function Overview({ restaurant }) {
  return (
    <>
      <div className="grid gap-2">
        <div className="flex items-center gap-6">
          <LocationOnOutlinedIcon />
          <p className="text-gray-500 text-xs">{restaurant?.location}</p>
        </div>
        <div className="flex items-center gap-6">
          <AccessTimeOutlinedIcon />
          <p className="text-gray-500 text-xs">{restaurant?.restaurant_open}</p>
        </div>
      </div>

      <RateReview />

      <div>
        <h3 className="font-medium mb-4">Reviews</h3>
        <Review reviews={restaurant?.reviews} />
      </div>

      <div>
        <h3 className="font-medium mb-4">Highlights</h3>
        <Highlight img={restaurant?.highlight} />
      </div>
    </>
  );
}
