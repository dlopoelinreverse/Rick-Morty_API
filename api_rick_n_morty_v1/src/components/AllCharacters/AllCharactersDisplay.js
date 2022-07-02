import React, { useEffect, useState } from "react";
import CardAllCharacters from "./CardAllCharacters";

const AllCharactersDisplay = ({ charcatersData }) => {
  const [locationsNames, setLocationsNames] = useState([]);
  const [originsNames, setOriginsNames] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState();
  const [selectedDimension, setSelectedDimension] = useState();
  const [isItLoad, setIsItLoad] = useState(false);

  const characteristics = {};

  // const location = [];
  // const locationType = [
  //   "Planet",
  //   "Cluster",
  //   "Space station",
  //   "Microverse",
  //   "TV",
  //   "Resort",
  //   "Fantasy town",
  //   "Dream",
  //   "Menagerie",
  //   "Game",
  //   "Customs",
  // ]; // page 1 et 2
  // const dimensionType = [
  //   "unknown",
  //   "Dimension C-137",
  //   "Post-Apocalyptic Dimension",
  //   "Replacement Dimension",
  //   "Cronenberg Dimension",
  //   "Fantasy Dimension",
  //   "Dimension 5-126",
  //   "Testicle Monster Dimension",
  //   "Cromulon Dimension",
  //   "Dimension C-500A",
  //   "Dimension K-83",
  //   "Dimension J19ζ7",
  //   "Eric Stoltz Mask Dimension",
  //   "Evil Rick's Target Dimension",
  // ];

  const getAllLocations = (data) => {
    const provArray = [];
    const uniqueLocations = [];
    data.map((character) => provArray.push(character.location.name));
    provArray.forEach((location) =>
      uniqueLocations.includes(location) ? null : uniqueLocations.push(location)
    );
    // setLocationsNames(uniqueLocations);
    characteristics["locations"] = uniqueLocations.map((location) => location);
    setLocationsNames(characteristics.locations);

    setIsItLoad(true);
  };
  const getAllOrigins = (data) => {
    const provArray = [];
    const uniqueOrigins = [];
    data.map((character) => provArray.push(character.origin.name));
    provArray.forEach((origin) =>
      uniqueOrigins.includes(origin) ? null : uniqueOrigins.push(origin)
    );
    // setOriginsNames(uniqueOrigins);
    characteristics["dimensions"] = uniqueOrigins.map((origin) => origin);
  };

  const showLocations = () => {
    return (
      locationsNames &&
      locationsNames.map((location) => (
        <option value={location}>{location}</option>
      ))
    );
  };

  const cardsDisplayHandeler = () => {
    return (
      Object.values(charcatersData) &&
      whatKindOfFilter()
        //   Object.values(charcatersData)
        // .filter((character) => character.species === "Human")
        .map((character) => (
          <CardAllCharacters key={character.id} character={character} />
        ))
    );
  };

  const whatKindOfFilter = () => {
    if (selectedLocation) {
      return Object.values(charcatersData).filter(
        (character) => character.location === selectedLocation
      );
    } else {
      return Object.values(charcatersData);
    }
  };

  // console.log(Object.values(charcatersData)[0]);
  useEffect(() => {
    whatKindOfFilter(selectedLocation);
    cardsDisplayHandeler();
    getAllLocations(Object.values(charcatersData));
    getAllOrigins(Object.values(charcatersData));
    console.log(characteristics);
  }, []);

  return (
    <div className="allCharactersDisplay">
      <div className="fitersContainer">
        <div className="btnFiltersContainer">
          <label for="location-select">Choose a Location:</label>
          <select
            name="location"
            id="location-select"
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value="">Choose a location</option>
            {locationsNames &&
              locationsNames.map((loc) => <option value={loc}>{loc}</option>)}
          </select>
        </div>
      </div>
      {/* <div className="filters">
        <div className="btnFiltersContainer">
          <label for="location-select">Choose a Location:</label>
          <select
            name="location"
            id="location-select"
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value="">Choose a location</option>
            {locationType.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
          <label for="dimension-select">Choose a Location:</label>
          <select
            name="location"
            id="location-select"
            onChange={(e) => setSelectedDimension(e.target.value)}
          >
            <option value="">Choose a dimension</option>
            {dimensionType.map((dimension) => (
              <option key={dimension} value={dimension}>
                {dimension}
              </option>
            ))}
          </select>
        </div>
      </div>
      <ul>{cardsDisplayHandeler()}</ul> */}
    </div>
  );
};

export default AllCharactersDisplay;
