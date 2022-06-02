import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import "./styles/style.css";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="React-photos-Web/" element={<Home />} />
        <Route path="React-photos-Web/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
