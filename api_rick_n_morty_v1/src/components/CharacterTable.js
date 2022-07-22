import React from "react";

const CharacterTable = ({ character }) => {
  const showPage = (id) => {
    console.log(id);
  };
  return (
    <div
      className="character-table-line"
      id={character.id}
      onClick={() => showPage(character.id)}
    >
      <h5 className="name">{character.name}</h5>
      <p className="is-alive">{character.status}</p>
    </div>
  );
};

export default CharacterTable;
