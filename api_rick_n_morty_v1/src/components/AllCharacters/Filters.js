import React from "react";

const Filters = ({ selectedLocation }) => {
  const locationType = [
    "Planet",
    "Cluster",
    "Space station",
    "Microverse",
    "TV",
    "Resort",
    "Fantasy town",
    "Dream",
    "Menagerie",
    "Game",
    "Customs",
  ]; // page 1 et 2
  const dimensionType = [
    "unknown",
    "Dimension C-137",
    "Post-Apocalyptic Dimension",
    "Replacement Dimension",
    "Cronenberg Dimension",
    "Fantasy Dimension",
    "Dimension 5-126",
    "Testicle Monster Dimension",
    "Cromulon Dimension",
    "Dimension C-500A",
    "Dimension K-83",
    "Dimension J19ζ7",
    "Eric Stoltz Mask Dimension",
    "Evil Rick's Target Dimension",
  ];
  return (
    <div className="filters">
      <div className="btnFiltersContainer">
        <label for="location-select">Choose a Location:</label>

        <select
          name="location"
          id="location-select"
          onChange={(e) => selectedLocation(e.target.value)}
        >
          <option value="">Choose a location</option>
          {locationType.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
        <label for="dimension-select">Choose a Location:</label>
        <select name="location" id="location-select">
          <option value="">Choose a dimension</option>
          {dimensionType.map((dimension) => (
            <option key={dimension} value={dimension}>
              {dimension}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;
