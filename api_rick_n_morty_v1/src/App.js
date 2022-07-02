import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import axios from "axios";
import AllCharacters from "./pages/AllCharacters";
import Home from "./pages/Home";
import AllCharactersV2 from "./pages/AllCharactersV2";
import TestAsync from "./pages/TestAsync";
import AsyncAllCharacters from "./pages/AsyncAllCharacters";
import GetAllDataFromALlPages from "./pages/GetAllDataFromALlPages";
import AllCharactersV3 from "./pages/AllCharactersV3";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-characters" element={<AllCharacters />} />
        <Route path="/all-characters-v2" element={<AllCharactersV2 />} />
        <Route path="/all-characters-v3" element={<AllCharactersV3 />} />
        <Route path="/async" element={<TestAsync />} />
        <Route path="/async-all" element={<AsyncAllCharacters />} />
        <Route path="/all-pages" element={<GetAllDataFromALlPages />} />
      </Routes>
    </div>
  );
};

export default App;
