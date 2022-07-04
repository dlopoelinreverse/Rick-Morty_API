import axios from "axios";
import React, { useEffect, useState } from "react";
import DisplayAllCharacters from "../components/AllCharacters/DisplayAllCharacters";
import DataDisplay from "../components/V2DataDisplay";

const AllCharactersV3 = () => {
  const [charactersNumber, setCharactersNumber] = useState();
  const [charactersData, setCharactersData] = useState();
  // const [getCaracteristics, setGetCaracteristics] = useState(false);
  // let charactersData = {};

  const AllCharactersV3 = async () => {
    const number = await getNumber();
    const charactersId = await getCharcatersId(number);
    const allIdsData = await getAllIdsData(charactersId);
    const allCharacteristics = await getAllCharacteristics(allIdsData);
    const displayLocations = await // console.log(
    //   "charactersDates",
    //   charactersDates,
    //   "charactersLocations",
    //   charactersLocations,
    //   "charactersOrigins",
    //   charactersOrigins,
    //   "charactersTypes",
    //   charactersTypes
    // );
    console.log(allCharacteristics);
  };

  const getNumber = () => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => setCharactersNumber(res.data.info.count));
    return charactersNumber;
  };
  const getData = () => {
    console.log("getData");
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => setCharactersNumber(res.data.info.count))
      .then(getCharcatersId(charactersNumber))
      .then(getAllIdsData(idsArray))
      .catch((error) => console.error("Erreur getAllIdsData", error))
      .then(console.log("Getting all charcters data : DONE"))
      .then(console.log(charactersData));

    //   .then(diplaySelection());
    //   .then(getAllCharacteristics(charactersData));
  };
  let idsArray = [];
  const getCharcatersId = (number) =>
    new Promise((resolve, reject) => {
      for (let i = 1; i <= number; i++) idsArray.push(i);
      resolve(idsArray);
    });

  // const getCharcatersId = (number) => {
  // for (let i = 1; i <= number; i++) idsArray.push(i);

  // return console.log(idsArray);
  // return idsArray;
  // };
  const getAllIdsData = (id) =>
    new Promise((resolve, reject) => {
      axios
        .get("https://rickandmortyapi.com/api/character/" + id)
        .then((res) => setCharactersData(res.data));
      resolve(charactersData);
    });
  // return charactersData;

  // .then(setGetCaracteristics(true));

  let charactersDates = [];
  let uniqueCharactersDates = [];
  let charactersTypes = [];
  let uniqueCharactersTypes = [];
  let charactersOrigins = [];
  let uniqueCharactersOrigins = [];
  let charactersLocations = [];
  let uniqueCharactersLocations = [];
  const getAllCharacteristics = (data) => {
    if (charactersData) {
      Object.values(charactersData).forEach((data) =>
        charactersDates.push(data.created)
      );
      charactersDates.forEach((date) =>
        uniqueCharactersDates.includes(date)
          ? null
          : uniqueCharactersDates.push(date)
      );
      // Get all type
      // charactersData &&
      Object.values(charactersData).forEach((data) =>
        charactersTypes.push(data.type)
      );
      charactersTypes.forEach((date) =>
        uniqueCharactersTypes.includes(date)
          ? null
          : uniqueCharactersTypes.push(date)
      );
      // Get all origin
      // charactersData &&
      Object.values(charactersData).forEach((data) =>
        // charactersOrigins.push(data.origin.name)
        charactersOrigins.push(data.origin.name)
      );
      charactersOrigins.forEach((date) =>
        uniqueCharactersOrigins.includes(date)
          ? null
          : uniqueCharactersOrigins.push(date)
      );
      // Get all location
      // charactersData &&
      Object.values(charactersData).forEach((data) =>
        // charactersLocations.push(data.location.name)
        charactersLocations.push(data.location.name)
      );
      charactersLocations.forEach((date) =>
        uniqueCharactersLocations.includes(date)
          ? null
          : uniqueCharactersLocations.push(date)
      );
    }
    return uniqueCharactersLocations;
    // return (
    //   charactersDates, charactersLocations, charactersOrigins, charactersTypes
    // );
  };
  //   async function DataDisplay() {

  useEffect(() => {
    AllCharactersV3();
  }, [charactersNumber]);
  return (
    <div className="AllCharacters">
      <h1>AllCharactersV3</h1>
      <DisplayAllCharacters charactersData={charactersData} />
      <div className="selctors">
        <div className="locations">
          <label for="location-select">Choose a Location:</label>

          <select
            name="location"
            id="location-select"
            // onChange={(e) => selectedLocation(e.target.value)}
          >
            <option value="">Choose a location</option>
            {/* {uniqueCharactersLocations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))} */}
            {uniqueCharactersLocations.map((loc) => (
              <h6>{loc}</h6>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default AllCharactersV3;
