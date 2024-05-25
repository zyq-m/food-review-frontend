import { Link, useParams } from "react-router-dom";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

import Overview from "../components/restaurant/section/overview";
import Review from "../components/restaurant/section/review";
import MenuSection from "../components/restaurant/section/menu";
import AboutSection from "../components/restaurant/section/about";

import Layout from "../components/layout";
import { useEffect, useState } from "react";
import { api } from "../api/api";

export default function Restaurant() {
  const { restaurantId, section } = useParams();
  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    api
      .get(`/restaurant/${restaurantId}`)
      .then((res) => {
        setRestaurant(res.data.restaurant);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [restaurantId]);

  return (
    <Layout>
      <div>
        <h2 className="text-xl font-semibold capitalize">
          {restaurant.restaurant_name}
        </h2>
        <div className="flex items-center text-yellow-400">
          <span className="text-sm text-gray-500 mr-1">5.0</span>
          <StarOutlinedIcon fontSize="13px" />
          <StarOutlinedIcon fontSize="13px" />
          <StarOutlinedIcon fontSize="13px" />
          <StarOutlinedIcon fontSize="13px" />
          <StarOutlinedIcon fontSize="13px" />
          <span className="text-sm text-gray-500 ml-1">(24)</span>
        </div>
        <p className="text-sm text-gray-500 capitalize">
          {restaurant.category}
        </p>

        <div className="flex gap-3 mt-2">
          {restaurant?.restaurant_img?.map((d) => {
            return (
              <>
                <div key={d.id}>
                  <img
                    src={d.src.original}
                    alt={d.alt}
                    className="rounded max-h-[206px]"
                    loading="lazy"
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div role="tablist" className="flex gap-5 mt-4 mb-6 text-sm uppercase">
        <Link
          to={`/restaurant/${restaurantId}/overview`}
          role="tab"
          className={section === "overview" && "border-b-2 border-b-black"}
        >
          Overview
        </Link>
        <Link
          to={`/restaurant/${restaurantId}/reviews`}
          role="tab"
          className={section === "reviews" && "border-b-2 border-b-black"}
        >
          Reviews
        </Link>
        <Link
          to={`/restaurant/${restaurantId}/menu`}
          role="tab"
          className={section === "menu" && "border-b-2 border-b-black"}
        >
          Menu
        </Link>
        <Link
          to={`/restaurant/${restaurantId}/about`}
          role="tab"
          className={section === "about" && "border-b-2 border-b-black"}
        >
          About
        </Link>
      </div>

      <div className="grid gap-6">
        {section === "overview" && <Overview restaurant={restaurant} />}
        {section === "reviews" && <Review restaurant={restaurant} />}
        {section === "menu" && <MenuSection restaurant={restaurant} />}
        {section === "about" && <AboutSection restaurant={restaurant} />}
      </div>
    </Layout>
  );
}
