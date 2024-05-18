import { useState, useEffect } from "react";

import SubNav from "../components/sub-nav";
import Review from "../components/restaurant/review";

import { api } from "../api/api";
import useUser from "../hooks/useUser";

export default function ReviewPage() {
  const { user } = useUser();
  const [review, setReview] = useState([]);

  useEffect(() => {
    api
      .get(`/user/${user.user_name}/review`)
      .then((res) => {
        setReview(res.data.review);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [user.user_name]);

  return (
    <SubNav>
      <Review reviews={review} />
    </SubNav>
  );
}
