import axios from "axios";
import React, { useEffect, useState } from "react";
import DisplayAllCharacters from "../components/AllCharacters/DisplayAllCharacters";
import DataDisplay from "../components/V2DataDisplay";

const AllCharactersV3 = () => {
  const [charactersNumber, setCharactersNumber] = useState();
  const [charactersData, setCharactersData] = useState({});
  const [getCaracteristics, setGetCaracteristics] = useState(false);
  const getData = () => {
    console.log("getData");
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => setCharactersNumber(res.data.info.count))
      .then(getCharcatersId(charactersNumber))
      .then(getAllIdsData(idsArray))
      .catch((error) => console.error("Erreur getAllIdsData", error))
      .then(console.log("Getting all charcters data : DONE"));

    //   .then(diplaySelection());
    //   .then(getAllCharacteristics(charactersData));
  };
  let idsArray = [];
  const getCharcatersId = (number) => {
    for (let i = 1; i <= number; i++) idsArray.push(i);
    // return console.log(idsArray);
  };
  const getAllIdsData = (id) => {
    axios
      .get("https://rickandmortyapi.com/api/character/" + id)
      .then((res) => setCharactersData(res.data))
      .then(setGetCaracteristics(true));
  };
  //   const getAllCharacteristics = (data) => {
  //     Object.values(data).map((data) => console.log(data.name));
  //   };
  //   async function DataDisplay() {

  useEffect(() => {
    getData();
  }, [charactersNumber]);
  return (
    <div className="AllCharacters">
      <h1>AllCharactersV3</h1>
      <DisplayAllCharacters charactersData={charactersData} />
    </div>
  );
};

export default AllCharactersV3;
