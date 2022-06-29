import React, { useEffect, useState } from "react";
import axios from "axios";
import AllCharactersDisplay from "../components/AllCharacters/AllCharactersDisplay";

const AllCharacters = () => {
  const [characterNumber, setCharacterNumber] = useState();
  const [allCharactersData, setAllCharactersData] = useState([]);

  const AllCharactersArray = [];
  const AllCharDataArray = [];

  const getAllCharactersData = () => {
    for (let i = 1; i <= characterNumber; i++) AllCharactersArray.push(i);

    axios
      .get("https://rickandmortyapi.com/api/character/" + AllCharactersArray)
      .then((res) => setAllCharactersData(res.data));
    // AllCharactersData.forEach((char) => AllCharDataArray.push(char));
  };

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => setCharacterNumber(res.data.info.count))
      .then(getAllCharactersData(characterNumber));
  }, [characterNumber]);
  return (
    <div>
      <AllCharactersDisplay charcatersData={allCharactersData} />
    </div>
  );
};

export default AllCharacters;
