import React from "react";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import "./App.css";
import MapMain from "./Pages/map.js";
import Nav from "./components/Nav";
import NavMain from "./components/NavMain";

function App() {
  return (
    <div className="App">
      <NavMain />
      <h1>Backup Page - G</h1>
      <Routers>
        <Nav />
        <Routes>
          <Route path="/map" element={<MapMain />} />
        </Routes>
      </Routers>
    </div>
  );
}

export default App;
