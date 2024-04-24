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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
