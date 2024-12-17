import React from "react";
import NavBar from "./components/navbar/Navbar";
import Accueil from "./components/accueil/Accueil";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Accueil />
    </div>
  );
}

export default App;
