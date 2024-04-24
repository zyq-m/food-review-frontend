import RateReview from "../rateReview";
import Review from "../review";

export default function ReviewSection() {
  return (
    <>
      <RateReview />

      <div>
        <h3 className="font-medium mb-4">Reviews</h3>
        <Review
          reviews={[
            {
              review:
                "This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine listand wonderful dessert. I recommend to everyone! I would like to come back here again and again.",
            },
            {
              review: "Love it",
            },
          ]}
        />
      </div>
    </>
  );
}
