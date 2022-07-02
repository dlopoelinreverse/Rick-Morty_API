import axios from "axios";
import React, { useEffect, useState } from "react";

const TestAsync = () => {
  // const loadData = async () => {
  //   // let an array of all characters id
  //   let proArray = [];
  //   const makeArrayNumber = (numbers) => {
  //     for (let i = 1; i <= numbers; i++) proArray.push(i);
  //     return proArray;
  //   };
  //   // get the data of all characters
  //   const getAllCharactersData = (id) => {
  //     axios.get("https://rickandmortyapi.com/api/character/" + id);
  //     return res.data.results;
  //   };
  //   const url = "https://rickandmortyapi.com/api/character/";
  //   const res = await axios.get(url);
  //   const data = await res.data;
  //   const numbers = await data.info.count;
  //   const arrayNumber = await makeArrayNumber(numbers);
  //   const charactersData = await getAllCharactersData(arrayNumber);

  //   // return console.log(data);
  // };
  const funcLente = () => {
    setTimeout(() => {
      console.log("héllo");
    }, 1000);
  };
  const estCeQue = () => {
    console.log("c'est passé ?");
  };
  const testAsync = async () => {
    const print = await funcLente();
  };

  useEffect(() => {
    // loadData();
    // funcLente();
    testAsync();
  }, []);
  return (
    <div>
      <h1>Test Async</h1>
    </div>
  );
};

export default TestAsync;
