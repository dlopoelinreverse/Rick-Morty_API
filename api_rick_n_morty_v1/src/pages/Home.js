import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Navigation />
      <NavLink to="/by-episode">
        <div className="episode-btn">
          {/* <h3>episodeBtn</h3> */}
          <img src="./guess_characters.jpeg" alt="" />
        </div>
      </NavLink>
      <NavLink to="/paginated-characters">
        <div className="paginate-btn">
          <h3>paginateBtn</h3>
        </div>
      </NavLink>
      <NavLink to="/by-characteristics">
        <div className="characteristics-btn">
          <h3>characteristicsBtn</h3>
        </div>
      </NavLink>
    </div>
  );
};

export default Home;
