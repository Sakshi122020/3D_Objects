import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import "./App.css";
import P5Wrapper from "./components/P5Wrapper";
import Sketch from "./components/Sketch";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/workspace" element={<P5Wrapper sketch={Sketch} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
