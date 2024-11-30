import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HelloWorld from "./components/HelloWorld";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HelloWorld />
      </main>
    </div>
  );
}

export default App;
