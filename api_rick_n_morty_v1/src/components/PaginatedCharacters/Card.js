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
    <div className="card" id={character.id}>
      {/* <li>/ */}
      <div className="img-container" id={character.id}>
        <img
          src={character.image}
          alt={character.name + "image"}
          id={character.id}
        />
      </div>
      <div className="content" id={character.id}>
        <h5 id={character.id}>{character.name}</h5>
      </div>
    </div>
  );
};

export default Card;
