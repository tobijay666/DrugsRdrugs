import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const RoutesComponent = () => {
  let routes = useRoutes([
    { path: "/", element: <Login /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    // Add other routes here
  ]);

  return routes;
};

export default RoutesComponent;
