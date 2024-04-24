import { Link, useParams } from "react-router-dom";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

import Overview from "../components/restaurant/section/overview";
import Review from "../components/restaurant/section/review";
import MenuSection from "../components/restaurant/section/menu";
import AboutSection from "../components/restaurant/section/about";

import Layout from "../components/layout";

export default function Restaurant() {
  const { restaurantId, section } = useParams();

  return (
    <Layout>
      <div>
        <h2 className="text-xl font-semibold">DubuYo</h2>
        <div className="flex items-center text-yellow-400">
          <span className="text-sm text-gray-500 mr-1">5.0</span>
          <StarOutlinedIcon fontSize="13px" />
          <StarOutlinedIcon fontSize="13px" />
          <StarOutlinedIcon fontSize="13px" />
          <StarOutlinedIcon fontSize="13px" />
          <StarOutlinedIcon fontSize="13px" />
          <span className="text-sm text-gray-500 ml-1">(24)</span>
        </div>
        <p className="text-sm text-gray-500">Restaurant</p>

        <div className="flex gap-3 mt-2">
          <div>
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipPKsjdubi-AmBizpFcJeTnMGIS-gCfNKtvYB3v_=s1360-w1360-h1020"
              alt=""
              className="rounded max-h-[206px]"
            />
          </div>
          <div>
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipPst2dReVhV_CpS-FuMBksAeGMN7wFex-G3NWoG=s1360-w1360-h1020"
              alt=""
              className="rounded max-h-[206px]"
            />
          </div>
          <div>
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipOJiP6C0ZDyA1xzHY-Q06JuawMXV37uTK5hPSwE=s1360-w1360-h1020"
              alt=""
              className="rounded max-h-[206px]"
            />
          </div>
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
        {section === "overview" && <Overview />}
        {section === "reviews" && <Review />}
        {section === "menu" && <MenuSection />}
        {section === "about" && <AboutSection />}
      </div>
    </Layout>
  );
}
