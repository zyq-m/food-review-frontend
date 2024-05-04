import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Login from "./pages/login";
import Signup from "./pages/sign-up";
import Main from "./pages/main-page";
import Restaurant from "./pages/restaurant";
import Profile from "./pages/profile";
import Password from "./pages/password";
import Review from "./pages/review";
import SignupRestaurant from "./pages/sign-up-restaurant";
import MyRestaurant from "./pages/my-restaurant";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
  {
    path: "/sign-up/restaurant",
    element: <SignupRestaurant />,
  },
  {
    path: "/restaurant/:restaurantId/:section",
    element: <Restaurant />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/password",
    element: <Password />,
  },
  {
    path: "/review",
    element: <Review />,
  },
  {
    path: "/my-restaurant",
    element: <MyRestaurant />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
