import React, { useState } from "react";
import SpecificCard from "./SpecificCard";

const Card = ({ character }) => {
  const [showCard, setShowCard] = useState(false);
  return (
    <div
      className="card"
      id={character.id}
      onMouseEnter={() => setShowCard(true)}
      onMouseLeave={() => setShowCard(false)}
    >
      <li>
        <img src={character.image} alt={character.name + "image"} />
        <h5>{character.name}</h5>
        <p id="lastTimeSeen">
          {character.location.name == "unknown"
            ? ""
            : `Last time seen in : ${character.location.name}`}
        </p>
        <p id="status">{character.status}</p>
      </li>
      <div className="specific-card">
        {showCard && <SpecificCard character={character} />}
      </div>
    </div>
  );
};

export default Card;
