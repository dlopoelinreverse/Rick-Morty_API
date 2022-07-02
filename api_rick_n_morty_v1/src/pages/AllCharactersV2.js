import axios from "axios";
import React, { useEffect, useState } from "react";

const AllCharactersV2 = () => {
  const [charactersNumber, setCharactersNumber] = useState();
  const [charactersData, setCharactersData] = useState({});
  const [characteristics, setCharacteristics] = useState({});
  // const [charactersLocations, setCharactersLocations] = useState([]);
  // const [charactersDates, setCharactersDates] = useState();
  let charactersDates = [];
  let charactersTypes = [];
  let charactersOrigins = [];
  let charactersLocations = [];

  const getAllCharactersData = () => {
    // Get the number of characters in API
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => setCharactersNumber(res.data.info.count));
    console.log("charactersNumber OK", charactersNumber);
    // Get all characters data in API
    getCharactersData();
  };
  const getCharactersData = () => {
    console.log("on va bosser ici maintenant");
    // List all the characters ID
    let proArray = [];
    for (let i = 1; i <= charactersNumber; i++) proArray.push(i);
    // Get all characters data and set the data state
    axios
      .get("https://rickandmortyapi.com/api/character/" + proArray)
      .then((res) => setCharactersData(res.data));

    // return console.log(charactersData);

    getAllCharacteristics();
  };
  const getAllCharacteristics = () => {
    // await getCharactersData();
    console.log("Ici on va chercher les caractérisitiques");
    // Get all the creations dates
    // charactersData &&
    if (charactersData) {
      Object.values(charactersData).forEach((data) =>
        charactersDates.push(data.created)
      );
      // Get all type
      // charactersData &&
      Object.values(charactersData).forEach((data) =>
        charactersTypes.push(data.type)
      );
      // Get all origin
      // charactersData &&
      Object.values(charactersData).forEach((data) =>
        charactersOrigins.push(data.origin.name)
      );
      // Get all location
      // charactersData &&
      Object.values(charactersData).forEach((data) =>
        charactersLocations.push(data.location.name)
      );
      // setCharactersLocations(Characteristics.charactersLocations);
    }
    // console.log(charactersLocations);
  };
  const sortHandeler = () => {
    return <h3>coucou</h3>;
  };
  // const createSelectors = () => {
  //   console.log("hye");
  //   Object.keys(Characteristics).forEach((characteristcsKeys) =>
  //     console.log(characteristcsKeys)
  //   );
  // };
  useEffect(() => {
    getAllCharactersData();

    // createSelectors();
  }, [charactersNumber]);
  return (
    <div>
      <h1>La V2 ma gueule</h1>
      {sortHandeler()}
    </div>
  );
};

export default AllCharactersV2;
