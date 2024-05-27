import SubNav from "../components/sub-nav";
import RestaurantDetails from "../components/restaurant/restaurant-details";
import RestaurantImg from "../components/restaurant/restaurant-img";
import { useEffect, useState } from "react";
import useUser from "../hooks/useUser";
import { api } from "../api/api";

export default function MyRestaurant() {
  const [restaurant, setRestaurant] = useState({});
  const { user } = useUser();

  useEffect(() => {
    user?.email &&
      api
        .get(`/my-restaurant/${user.email}`)
        .then((res) => {
          setRestaurant(res.data.restaurant);
        })
        .catch((err) => {
          console.error(err);
        });
  }, [user?.email]);

  return (
    <SubNav>
      <RestaurantDetails restaurant={restaurant} />
      <RestaurantImg />
    </SubNav>
  );
}
