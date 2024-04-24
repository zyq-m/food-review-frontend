import SubNav from "../components/sub-nav";
import Review from "../components/restaurant/review";

import { reviewByUser } from "../data/restaurant";

export default function review() {
  return (
    <SubNav>
      <Review reviews={reviewByUser} />
    </SubNav>
  );
}
