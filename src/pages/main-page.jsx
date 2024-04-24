import Layout from "../components/layout";
import RestaurantCard from "../components/restaurantCard";

export default function Main() {
  return (
    <Layout>
      <div className="flex gap-2 justify-center mb-9">
        <button className="btn btn-sm rounded-badge">Restaurant</button>
        <button className="btn btn-sm btn-ghost rounded-badge">Seafood</button>
        <button className="btn btn-sm btn-ghost rounded-badge">
          Hamburger
        </button>
        <button className="btn btn-sm btn-ghost rounded-badge">Western</button>
      </div>

      <RestaurantCard />
    </Layout>
  );
}
