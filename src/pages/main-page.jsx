import { useEffect, useState } from "react";
import Layout from "../components/layout";
import RestaurantCard from "../components/restaurantCard";
import { api } from "../api/api";
import { restaurant } from "../data/restaurant";

export default function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get("/restaurant")
      .then((res) => {
        console.log(res);
        setData(res.data);
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

      <RestaurantCard restaurant={restaurant} />
    </Layout>
  );
}
