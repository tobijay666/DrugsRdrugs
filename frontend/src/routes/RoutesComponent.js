import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home/Home";
import PharmacistDashboard from "../pages/Dashboard/PharmacistDashboard";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

const RoutesComponent = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    {
      path: "/dashboard",
      element:
        localStorage.getItem("role") === "pharmacist" ? (
          <PharmacistDashboard />
        ) : (
          <Navigate to="/login" replace />
        ),
    },
  ]);

  return routes;
};

export default RoutesComponent;
