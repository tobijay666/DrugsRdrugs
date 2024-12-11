import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "./routes/RoutesComponent"; // Adjust to match your structure

const App = () => {
  return (
    <BrowserRouter>
      <RoutesComponent />
    </BrowserRouter>
  );
};

export default App;
