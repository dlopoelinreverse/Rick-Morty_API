import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import SpecificPage from "../pages/SpecificPage";
import Card from "./Card";
import SpecificCard from "./SpecificCard";

const DataDisplay = ({ pageData }) => {
  const [pageResults, setPageResults] = useState();
  const [showCard, setShowCard] = useState(false);
  const [idSelected, setIdSelected] = useState();
  const [whichOneIsDisplayed, setWichOneIsDisplayed] = useState();
  // const paginate = document.querySelector(".pagination-container");

  const showingCard = () => {
    if (showCard) {
      setShowCard(false);
    } else {
      setShowCard(true);
    }
  };

  // const paginateHandeler = () => {
  //   if (whichOneIsDisplayed === "specificCard") {
  //     paginate.classList.add("hidden");
  //   } else {
  //     paginate.classList.remove("hidden");
  //   }
  // };

  const cardDisplay = () => {
    if (showCard && idSelected) {
      return (
        pageResults &&
        pageResults
          .filter((character) => character.id == idSelected)
          .map((character) => (
            <div className="specific-card-container" key={character.id}>
              <div
                className="specific-card"
                onClick={() => (
                  showingCard(), setIdSelected(), setWichOneIsDisplayed("card")
                )}
              >
                <SpecificCard character={character} />
              </div>
            </div>
          ))
      );
    } else {
      return (
        <ul className="cards-container">
          {pageResults &&
            pageResults.map((character) => (
              <li
                key={character.id}
                //   onClick={() => showingCard()}
                // onMouseEnter={() => setShowCard(true)}
                // onMouseLeave={() => setShowCard(false)}
                onClick={(e) => (
                  setIdSelected(e.target.id),
                  showingCard(),
                  setWichOneIsDisplayed("specifcCard")
                )}
              >
                <Card key={character.id} character={character} />
              </li>
            ))}
        </ul>
      );
    }
  };

  useEffect(() => {
    setPageResults(pageData.results);
    // paginateHandeler();
  }, [pageData, whichOneIsDisplayed]);
  return (
    <div className="data-display">
      {cardDisplay()}

      {/* {showCard && <SpecificCard character={character} />} */}
      {/* {cardDisplay()} */}
    </div>
  );
};

export default DataDisplay;
