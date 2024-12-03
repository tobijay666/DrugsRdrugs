import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HelloWorld from "./components/HelloWorld";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HelloWorld />
        <HelloWorld />
        <HelloWorld />
        <HelloWorld />
        <HelloWorld />
      </main>
      <Footer />
    </div>
  );
}

export default App;
