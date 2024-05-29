import { useState, useEffect } from "react";

import SubNav from "../components/sub-nav";
import Review from "../components/restaurant/review";

import { api } from "../api/api";
import useUser from "../hooks/useUser";

export default function ReviewPage() {
  const { user } = useUser();
  const [review, setReview] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let url;

      if (user.role_id == 2) {
        url = `/restaurant/${user.restaurant_id}/review`;
      } else {
        url = `/user/${user.user_name}/review`;
      }

      api
        .get(url)
        .then((res) => {
          setReview(
            res.data.review.map((d) => ({
              ...d,
              selected: false,
              edited_review: d.review_description,
            }))
          );
        })
        .catch((err) => {
          console.error(err);
        });
    };

    fetchData();
  }, [user.role_id]);

  return (
    <SubNav>
      <Review reviews={review} edit={user.role_id == 2 ? false : true} />
    </SubNav>
  );
}
