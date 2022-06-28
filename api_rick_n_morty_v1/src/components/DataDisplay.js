import React, { useEffect, useState } from "react";
// import SpecificPage from "../pages/SpecificPage";
import Card from "./Card";

const DataDisplay = ({ pageData }) => {
  const [pageResults, setPageResults] = useState();

  useEffect(() => {
    setPageResults(pageData.results);
  }, [pageData]);
  return (
    <div className="data-display">
      <ul className="cards-container">
        {pageResults &&
          pageResults.map((character) => (
            <Card key={character.id} character={character} />
          ))}
      </ul>
    </div>
  );
};

export default DataDisplay;
