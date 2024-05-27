import { useEffect, useState } from "react";
import Layout from "../components/layout";
import RestaurantCard from "../components/restaurantCard";
import { api } from "../api/api";

export default function Main() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await Promise.all([
          api.get("/restaurant"),
          api.get("/restaurant/category"),
        ]);

        setData(res[0].data.restaurant);
        setCategory(() =>
          res[1].data.category.map((d) => {
            if (d.name === "all") {
              return { ...d, selected: true };
            }
            return { ...d, selected: false };
          })
        );
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  async function onCategory(id, category) {
    setCategory((prev) =>
      prev.map((d) => {
        if (d.id === id) return { ...d, selected: true };
        return { ...d, selected: false };
      })
    );

    try {
      const res = await api.get("/restaurant/search", {
        params: {
          category: category,
        },
      });
      setData(res.data.restaurant);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Layout>
      <div className="flex gap-2 justify-center mb-9">
        {category?.map((d) => {
          return (
            <button
              key={d.id}
              className={`capitalize btn btn-sm rounded-badge ${
                !d.selected && "btn-ghost"
              }`}
              onClick={() => onCategory(d.id, d.name)}
            >
              {d.name}
            </button>
          );
        })}
      </div>

      <img
        src="https://www.pexels.com/photo/food-inside-display-chiller-1855214/"
        alt=""
      />

      <RestaurantCard restaurant={data} />
    </Layout>
  );
}
