import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import DataDisplay from "../components/DataDisplay";

const Home = () => {
  const [pageSelected, setPageSelected] = useState();
  const [pageData, setPageData] = useState([]);
  const [allCharacters, setAllCharacters] = useState();
  const handlePageCLick = (data) => {
    setPageSelected(data.selected + 1);
    // console.log(pageSelected);
  };

  const getAllCharcters = () => {
    console.log(pageData.info.count);
  };

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/?page=" + pageSelected)
      .then((res) => setPageData(res.data));

    // getAllCharcters();
  }, [pageSelected]);
  return (
    <div className="home">
      <header>
        <h1>Rick & Morty Universe</h1>
      </header>

      <div className="pagination-container">
        <ReactPaginate
          previousLabel={"<<"}
          nextLabel={">>"}
          breakLabel={"..."}
          pageCount={42}
          marginPagesDisplayed={4}
          pageRangeDisplayed={3}
          onPageChange={handlePageCLick}
        />
      </div>
      <DataDisplay pageData={pageData} />
      <footer></footer>
    </div>
  );
};

export default Home;