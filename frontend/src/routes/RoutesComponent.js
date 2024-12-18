import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home/Home";

const RoutesComponent = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/home", element: <Home /> },
    // Add other routes here
  ]);

  return routes;
};

export default RoutesComponent;
