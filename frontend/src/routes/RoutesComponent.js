import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "../components/pages/Login";
import Signup from "../components/pages/Signup";

const RoutesComponent = () => {
  let routes = useRoutes([
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    // Add other routes here
  ]);

  return routes;
};

export default RoutesComponent;
