import { Routes, Route } from "react-router-dom";
import UserContext from "./context/UserContext";

import Login from "./pages/login";
import Signup from "./pages/sign-up";
import Main from "./pages/main-page";
import Restaurant from "./pages/restaurant";
import Profile from "./pages/profile";
import Password from "./pages/password";
import Review from "./pages/review";
import SignupRestaurant from "./pages/sign-up-restaurant";
import MyRestaurant from "./pages/my-restaurant";
import { useState } from "react";

import ProtectedRoute from "./components/protectedRoute";

export default function App() {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/sign-up" element={<Signup />} />
        <Route path="/sign-up/restaurant" element={<SignupRestaurant />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Main />} />
          <Route
            path="/restaurant/:restaurantId/:section"
            element={<Restaurant />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/password" element={<Password />} />
          <Route path="/review" element={<Review />} />
          <Route path="/my-restaurant" element={<MyRestaurant />} />
        </Route>
      </Routes>
    </UserContext.Provider>
  );
}