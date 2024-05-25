import RateReview from "../rateReview";
import Review from "../review";

export default function ReviewSection({ restaurant }) {
  return (
    <>
      <RateReview />

      <div>
        <h3 className="font-medium mb-4">Reviews</h3>
        <Review reviews={restaurant?.reviews} />
      </div>
    </>
  );
}
