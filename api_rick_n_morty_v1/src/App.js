import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import axios from "axios";
// import Home from "./pages/Home";
import AllCharactersFromApp from "./pages/AllCharactersFromApp";
import PaginatedCharacters from "./pages/PaginatedCharacters";

const App = () => {
  const [charactersNumber, setCharactersNumber] = useState();
  const [allCharactersData, setAllCharactersData] = useState();
  let charactersIds = [];
  const getCharactersNumber = () => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => setCharactersNumber(res.data.info.count));
  };
  const getCharactersIds = () => {
    for (let i = 1; i <= charactersNumber; i++) charactersIds.push(i);
    // return console.log(charactersIds);
  };
  const getCharactersData = () => {
    axios
      .get("https://rickandmortyapi.com/api/character/" + charactersIds)
      .then((res) => setAllCharactersData(res.data));
  };
  const getAllCharactersData = () => {
    getCharactersNumber();
    getCharactersIds();
    getCharactersData();
  };
  useEffect(() => {
    getAllCharactersData();
  }, [charactersNumber]);
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/paginated-characters" element={<PaginatedCharacters />} />
        <Route
          path="/all-characters"
          element={<AllCharactersFromApp charactersData={allCharactersData} />}
        />
      </Routes>
    </div>
  );
};

export default App;
