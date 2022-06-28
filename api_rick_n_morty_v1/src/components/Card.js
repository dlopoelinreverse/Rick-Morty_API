import React, { useState } from "react";

import SpecificCard from "./SpecificCard";

const Card = ({ character }) => {
  const [showCard, setShowCard] = useState(false);
  const showingCard = () => {
    if (showCard) {
      setShowCard(false);
    } else {
      setShowCard(true);
    }
  };
  return (
    <div
      className="card"
      id={character.id}
      //   onClick={() => showingCard()}
      onMouseEnter={() => setShowCard(true)}
      onMouseLeave={() => setShowCard(false)}
    >
      <li>
        <div className="img-container">
          <img src={character.image} alt={character.name + "image"} />
        </div>
        <h5>{character.name}</h5>
        <p id="lastTimeSeen">
          {character.location.name == "unknown"
            ? ""
            : `Last time seen in : ${character.location.name}`}
        </p>
        <p id="status">
          {character.status == "unknown" ? "" : `Status : ${character.status}`}
        </p>
      </li>
      <div className="specific-card-container">
        {showCard && <SpecificCard character={character} />}
      </div>
    </div>
  );
};

export default Card;
