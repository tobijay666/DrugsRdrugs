import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home/Home";
import PharmacistDashboard from "../pages/Dashboard/PharmacistDashboard";

const RoutesComponent = () => {
  const userRole = localStorage.getItem("role"); // Get role from localStorage

  const getDashboardRoute = () => {
    switch (userRole) {
      case "pharmacist":
        return <PharmacistDashboard />;
      // Add more cases for other roles
      default:
        return <Navigate to="/login" replace />;
    }
  };

  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/dashboard", element: getDashboardRoute() }, // Generic dashboard route
  ]);

  return routes;
};

export default RoutesComponent;
