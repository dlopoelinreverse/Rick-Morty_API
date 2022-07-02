import React, { useEffect, useState } from "react";
import axios from "axios";

const AsyncAllCharacters = () => {
  const [charactersNumber, setCharactersNumber] = useState();
  const [arrayNumbers, setArrayNumbers] = useState();
  // async function getAllCharactersData() {
  //   const number = await getNumberCharacters();
  //   const arrayNumbers = await getArrayNumbers();
  //   const allCharactersData = await getAllData(arrayNumbers);
  // }
  const getNumberCharacters = () => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => setCharactersNumber(res.data.info.count));
    return charactersNumber;
  };
  // const getArrayNumbers = (num) => {
  //   let proArray = [];
  //   for (let i = 1; i <= charactersNumber; i++) proArray.push(i);
  //   return setArrayNumbers(proArray);
  // };
  async function getArrayNumbers(num) {
    const getArray = () => {
      let proArray = [];
      for (let i = 0; i <= charactersNumber; i++) proArray.push(i);
      return setArrayNumbers(proArray);
      console.log("Fonction getArray dans getArrayNumber");
    };
    const getDataCharacters = () => {
      console.log("fonction getDataCharcters dans getArrayNumber");
      axios
        .get("https://rickandmortyapi.com/api/character/?page=1")
        .then((res) => console.log(res))
        .catch((err) => console.log("err", err));
    };
    const array = await getArray();
    const getData = await getDataCharacters();
    return array, getData;
  }
  // const getAllData = (arr) => {
  //   console.log(arr);
  // };
  // async function getAllCharactersData() {
  //   const number = await getNumberCharacters();
  //   const arrayNumbers = await getArrayNumbers(number);
  //   console.log(arrayNumbers);
  // }
  const getAllCharactersData2 = () => {
    getNumberCharacters();
    getArrayNumbers(charactersNumber);
  };
  useEffect(() => {
    // getAllCharactersData();
    getAllCharactersData2();
  }, [charactersNumber]);
  return (
    <div>
      <h1>Async All Characters</h1>
      <p>{arrayNumbers}</p>
    </div>
  );
};

export default AsyncAllCharacters;
