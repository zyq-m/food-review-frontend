import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

import Review from "../review";
import Highlight from "../highlight";
import RateReview from "../rateReview";

export default function Overview({ highlight }) {
  return (
    <>
      <div className="grid gap-2">
        <div className="flex items-center gap-6">
          <LocationOnOutlinedIcon />
          <p className="text-gray-500 text-xs">
            Simpang 3 Pengkalan Kubur, 22200 Besut, Terengganu
          </p>
        </div>
        <div className="flex items-center gap-6">
          <AccessTimeOutlinedIcon />
          <p className="text-gray-500 text-xs">
            Opens &gt; Sunday - Friday (6:00 PM-10:00 PM)
          </p>
        </div>
      </div>

      <RateReview />

      <div>
        <h3 className="font-medium mb-4">Reviews</h3>
        <Review
          reviews={[
            {
              review:
                "This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine listand wonderful dessert. I recommend to everyone! I would like to come back here again and again.",
            },
          ]}
        />
      </div>

      <div>
        <h3 className="font-medium mb-4">Highlights</h3>
        <Highlight img={highlight} />
      </div>
    </>
  );
}
