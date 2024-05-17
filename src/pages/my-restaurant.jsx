import SubNav from "../components/sub-nav";
import RestaurantDetails from "../components/restaurant/restaurant-details";
import RestaurantImg from "../components/restaurant/restaurant-img";

export default function MyRestaurant() {
  return (
    <SubNav>
      <RestaurantDetails />
      <RestaurantImg />
    </SubNav>
  );
}
