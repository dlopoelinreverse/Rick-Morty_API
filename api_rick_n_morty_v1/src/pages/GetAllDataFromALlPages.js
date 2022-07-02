import axios from "axios";
import React, { useEffect, useState } from "react";

const GetAllDataFromALlPages = () => {
  const [pagesNumber, setPagesNumber] = useState();
  // const [dataArray, setDataArray] = useState([]);
  const [ArrayData, setArrayData] = useState([]);
  let pagesArray = [];
  let dataArray = [];
  const getAllThePages = () => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => setPagesNumber(res.data.info.pages))
      .then(getPagesId())
      .then(getAllPagesData())
      .then(setArrayData(dataArray));
    // .then(simplifyArray(dataArray));
  };
  const getPagesId = () => {
    for (let i = 1; i <= pagesNumber; i++) pagesArray.push(i);
    // console.log(pagesArray);
  };
  const getAllPagesData = () => {
    pagesArray.forEach(
      (page) =>
        axios
          .get("https://rickandmortyapi.com/api/character/?page=" + page)
          .then((res) => dataArray.push(res.data.results))
      // .then(setDataArray(dataArray))
    );
  };
  const simplifyArray = (arrays) => {
    console.log();
  };

  useEffect(() => {
    getAllThePages();
  }, [pagesNumber]);
  return (
    <div>
      <h1>Data from all pages</h1>
    </div>
  );
};

export default GetAllDataFromALlPages;
