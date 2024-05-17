import { useEffect, useState } from "react";
import Layout from "../components/layout";
import RestaurantCard from "../components/restaurantCard";
import { api } from "../api/api";

export default function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get("/restaurant")
      .then((res) => {
        setData(res.data.restaurant);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

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

      <img
        src="https://www.pexels.com/photo/food-inside-display-chiller-1855214/"
        alt=""
      />

      <RestaurantCard restaurant={data} />
    </Layout>
  );
}
