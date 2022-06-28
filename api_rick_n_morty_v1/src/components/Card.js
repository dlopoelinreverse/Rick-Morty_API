import React, { useState } from "react";

// import SpecificCard from "./SpecificCard";

const Card = ({ character }) => {
  // const [showCard, setShowCard] = useState(false);
  // const showingCard = () => {
  //   if (showCard) {
  //     setShowCard(false);
  //   } else {
  //     setShowCard(true);
  //   }
  // };
  return (
    <div
      className="card"
      id={character.id}
      //   onClick={() => showingCard()}
      // onMouseEnter={() => setShowCard(true)}
      // onMouseLeave={() => setShowCard(false)}
    >
      {/* <li>/ */}
      <div className="img-container" id={character.id}>
        <img
          src={character.image}
          alt={character.name + "image"}
          id={character.id}
        />
      </div>
      <div className="content">
        <h5 id={character.id}>{character.name}</h5>
        <p className="lastTimeSeen" id={character.id}>
          {character.location.name == "unknown"
            ? ""
            : `Last time seen in : ${character.location.name}`}
        </p>
        <p className="status" id={character.id}>
          {character.status == "unknown" ? "" : `Status : ${character.status}`}
        </p>
        {/* </li> */}
        {/* <div className="specific-card-container">
        {showCard && <SpecificCard character={character} />}
      </div> */}
      </div>
    </div>
  );
};

export default Card;
