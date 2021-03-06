import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SpecificCharacter from "../../pages/SpecificCharacter";
import Card from "./Card";
import Modal from "./Modal";

const DataDisplay = ({ pageData }) => {
  const [pageResults, setPageResults] = useState();
  const [showCard, setShowCard] = useState(false);
  const [idSelected, setIdSelected] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [dataId, setDataId] = useState([]);
  const [whichOneIsDisplayed, setWichOneIsDisplayed] = useState();

  const showingCard = () => {
    if (showCard) {
      setShowCard(false);
    } else {
      setShowCard(true);
    }
  };

  const getDataId = (id) => {
    pageResults &&
      pageResults
        .filter((result) => result.id == id)
        .map((result) => setDataId(result));
    // .then((result) => console.log(result));
  };

  useEffect(() => {
    setPageResults(pageData.results);
    // paginateHandeler();
  }, [pageData]);
  return (
    <div className="data-display">
      <ul className="cards-container">
        {/* <NavLink to="/specific-character" > */}
        {pageResults &&
          pageResults.map((character) => (
            <li
              key={character.id}
              id={character.id}
              onClick={(e) => (
                setIdSelected(e.target.id),
                // setOpenModal(true),
                getDataId(e.target.id),
                (<SpecificCharacter character={character} />)
              )}
            >
              <Card key={character.id} character={character} />
            </li>
          ))}
        {/* </NavLink> */}
      </ul>
      {/* <Modal
        open={openModal}
        dataId={dataId}
        onClose={() => setOpenModal(false)}
      /> */}
    </div>
  );
};

export default DataDisplay;
