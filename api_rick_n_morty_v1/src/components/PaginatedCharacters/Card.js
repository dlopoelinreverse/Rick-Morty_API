import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";

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
  // console.log(character);
  return (
    // <NavLink to="/specific-character" >
    // <NavLink
    //   to={{
    //     pathname: "/specific-character",
    //     state: { from: "This is my props" },
    //   }}
    // >
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
    // </NavLink>
  );
};

export default Card;
