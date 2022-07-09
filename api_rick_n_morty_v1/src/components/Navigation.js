import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink
          to="/"
          //   quand tu reconnait l'url "/", tu me changes le style du li accueil en nav-active, mais quoi qu'il arrive le li aura la class hover
          //   className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>home</li>
        </NavLink>
        <NavLink to="/paginated-characters">
          <li>paginated</li>
        </NavLink>
        <NavLink to="/by-episode">
          <li>episodes</li>
        </NavLink>
        <NavLink to="/by-characteristics">
          <li>characterisctics</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
