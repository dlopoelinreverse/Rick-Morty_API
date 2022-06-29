import React from "react";

const CardAllCharacters = ({ character }) => {
  return (
    <div>
      <li>
        <div className="frontSide-card">
          <h5 className="characterName">{character.name}</h5>
          <img src={character.image} alt="#" />
        </div>
        <div className="backSide-card">
          <h5 className="characterName">{character.name}</h5>
          <p className="characterGender">{character.gender}</p>
          <p className="characterStatus">{character.status}</p>
        </div>
      </li>
    </div>
  );
};

export default CardAllCharacters;
