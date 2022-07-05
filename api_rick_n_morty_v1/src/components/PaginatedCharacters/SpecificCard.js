import React from "react";

const SpecificCard = ({ character }) => {
  //   const isAttributeExist = (attribut) => {
  //     switch (attribut) {
  //       case "":
  //         return ({style =  visibilyty: "hidden" });
  //       case "unknow":
  //         return ({style =  visibilyty: "hidden" });
  //       default:
  //         return ({style =  visibilyty: "hidden" });
  //     }
  //   };
  return (
    <div
      className="spcecific-card-container"
      id={"specificCard" + character.id}
    >
      <div className="left-part">
        <h3>{character.name}</h3>
        <div className="img-container">
          <img src={character.image} alt={character.name + "image"} />
        </div>
      </div>
      <div className="right-part">
        <p id="status">
          {character.status == "unknown" ? "" : `Status : ${character.status}`}
        </p>
        <p id="gender">Gender : {character.gender}</p>
        <p id="lastLocation">
          {character.location.name == "unknown"
            ? ""
            : `Last time seen in : ${character.location.name}`}
        </p>
        <p id="origin">
          {character.origin.name == "unknown"
            ? ""
            : `Comming from : ${character.origin.name}`}
        </p>
        <p id="species">
          {character.species ? `Species : ${character.species}` : ""}
        </p>
        <p id="type">{character.type ? `Type : ${character.type}` : ""}</p>
        <p id="numberEpisodes">
          {character.episode.length > 1
            ? `Seen in ${character.episode.length} episodes`
            : `Seen in ${character.episode.length} episode`}
        </p>
      </div>
    </div>
  );
};

export default SpecificCard;
