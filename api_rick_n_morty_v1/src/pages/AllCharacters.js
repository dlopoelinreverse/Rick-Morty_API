import React, { useEffect, useState } from "react";
import axios from "axios";
import AllCharactersDisplay from "../components/AllCharacters/AllCharactersDisplay";

const AllCharacters = () => {
  // const [characterNumber, setCharacterNumber] = useState("");
  const [allCharactersData, setAllCharactersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [locationsNames, setLocationsNames] = useState();
  // const [isItLoad, setIsItLoad] = useState(false);

  const AllCharactersArray = [];
  let AllCharDataArray = [];
  let characterNumber;

  const getCharacterNumber = () => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => (characterNumber = res.data.info.count));

    const getAllCharactersData = (characterNumber) => {
      for (let i = 1; i <= characterNumber; i++) AllCharactersArray.push(i);
      axios
        .get("https://rickandmortyapi.com/api/character/" + AllCharactersArray)
        .then((res) => setAllCharactersData(res.data));
      console.log(allCharactersData);
      // AllCharactersData.forEach((char) => AllCharDataArray.push(char));
    };
    characterNumber = 826 ? getAllCharactersData() : null;
    // .then(getAllCharactersData(characterNumber));
  };

  // const getAllCharactersDataV2 = () => {
  //   async () => {
  //     setLoading(true);
  //     try {
  //       const { data: response } = await axios.get(
  //         "https://rickandmortyapi.com/api/character"
  //       );
  //       setData(response);
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //     setLoading(false);
  //   };
  // //aller chercher le nombre de personnages dans l'api:
  // axios
  //   .get("https://rickandmortyapi.com/api/character")
  //   .then((res) => setCharacterNumber(res.data.info.count));
  // // setTimeout(() => console.log(characterNumber), 3000);
  // //aller chercher toute la data de chaque personnage
  // setTimeout(() => {
  //   for (let i = 1; i <= characterNumber; i++) AllCharactersArray.push(i);
  //   setTimeout(() => {
  //     axios
  //       .get(
  //         "https://rickandmortyapi.com/api/character/" + AllCharactersArray
  //       )
  //       .then((res) => setAllCharactersData(res.data));
  //   }, 2000);
  //   // axios
  //   // .get("https://rickandmortyapi.com/api/character/" + AllCharactersArray)
  //   // .then((res) => (AllCharDataArray = res.data));

  //   // console.log(allCharactersData);
  // }, 1000);
  // };

  const getAllLocations = (data) => {
    const provArray = [];
    const uniqueLocations = [];
    data.map((character) => provArray.push(character.location.name));
    provArray.forEach((location) =>
      uniqueLocations.includes(location) ? null : uniqueLocations.push(location)
    );
    // setLocationsNames(uniqueLocations);
    // characteristics["locations"] = uniqueLocations.map((location) => location);
    // setLocationsNames(characteristics.locations);
    setLocationsNames(uniqueLocations);
  };

  useEffect(() => {
    // const getNumber = async () => {
    // const number = await

    getCharacterNumber();
    // const getAllCharactersDataV2 = async () => {
    //   setLoading(true);
    //   try {
    //     const { data: response } = await axios.get(
    //       "https://rickandmortyapi.com/api/character" + AllCharactersArray
    //     );
    //     setData(response);
    //   } catch (error) {
    //     console.error(error.message);
    //   }
    //   setLoading(false);
    // };

    // getAllCharactersDataV2();

    // .then((res) => setCharacterNumber(res.data.info.count))
    // .then(getAllCharactersData(characterNumber));

    //   return number;
    // };
    // const getData = async () => {
    //   const data = await getAllCharactersData();
    //   return data;
    // };
    // getData();
    // getNumber();
    // getLocations();
  }, []);
  return (
    <div>
      <AllCharactersDisplay charcatersData={allCharactersData} />
    </div>
  );
};

export default AllCharacters;
