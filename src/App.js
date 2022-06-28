import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import axios from "axios";
import AllCharacters from "./pages/AllCharacters";
import Home from "./pages/Home";

const App = () => {
  // const [allCharacters, setAllCharacters] = useState();
  // const getCharactersNumber = () => {
  //   let characterNumber;
  //   axios
  //     .get("https://rickandmortyapi.com/api/character")
  //     .then((res) => setAllCharacters(res.data.info.count));
  //   if (allCharacters) {
  //     for (let i = 1; i <= allCharacters; i++) {
  //       characterNumber.push(i);
  //     }
  //   }
  // };
  // useEffect(() => {
  //   getCharactersNumber();
  // }, []);
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
