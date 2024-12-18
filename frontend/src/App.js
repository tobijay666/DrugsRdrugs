import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "./routes/RoutesComponent"; // Adjust to match your structure
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./styles/css/colors.css";
import "./styles/css/demo.css";
import "./styles/css/components.css";
import "./styles/js/app";
import "./styles/js/demo";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <RoutesComponent />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
