import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import V2DataDisplay from "../components/PaginatedCharacters/V2DataDisplay";
import Navigation from "../components/Navigation";
import DataDisplay from "../components/PaginatedCharacters/V2DataDisplay";

const PaginatedCharacters = () => {
  const [numberOfPage, setNumberOfPage] = useState();
  const [pageSelected, setPageSelected] = useState();
  const [pageData, setPageData] = useState([]);
  const context = "paginated";
  const handlePageCLick = (data) => {
    setPageSelected(data.selected + 1);
    // console.log(pageSelected);
  };

  const getNumberOfPage = () => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => setNumberOfPage(res.data.info.pages));
  };

  useEffect(() => {
    getNumberOfPage();
    axios
      .get("https://rickandmortyapi.com/api/character/?page=" + pageSelected)
      .then((res) => setPageData(res.data));

    // getAllCharcters();
  }, [pageSelected]);
  return (
    <div className="paginated-chararcters">
      <header>
        <h1>Rick & Morty Universe</h1>

        <div className="pagination-container">
          <div className="page-indicator">
            <p>{pageSelected ? pageSelected : "1"}</p>
          </div>
          <div className="selector">
            <ReactPaginate
              previousLabel={"<<"}
              nextLabel={">>"}
              breakLabel={"..."}
              pageCount={numberOfPage}
              marginPagesDisplayed={3}
              pageRangeDisplayed={3}
              onPageChange={handlePageCLick}
            />
          </div>
        </div>
        <Navigation context={context} />
      </header>
      {/* <V2DataDisplay pageData={pageData} /> */}
      <DataDisplay pageData={pageData} />
      <footer></footer>
    </div>
  );
};

export default PaginatedCharacters;
