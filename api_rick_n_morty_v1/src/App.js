import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import axios from "axios";
import AllCharacters from "./pages/AllCharacters";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-characters" element={<AllCharacters />} />
      </Routes>
    </div>
  );
};

export default App;
