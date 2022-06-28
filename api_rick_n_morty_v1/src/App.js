import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import axios from "axios";
import AllCharacters from "./pages/AllCharacters";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="all-characters" elemnent={<AllCharacters />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
