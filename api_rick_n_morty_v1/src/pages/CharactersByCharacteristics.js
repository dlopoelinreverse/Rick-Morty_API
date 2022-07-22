import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Card from "../components/PaginatedCharacters/Card";

const CharactersByCharacteristics = ({ charactersData }) => {
  // const [dates, setDates] = useState();
  const [types, setTypes] = useState();
  const [origins, setOrigins] = useState();
  const [locations, setLocations] = useState();

  // const [selectedDate, setSelectedDate] = useState();
  const [selectedType, setSelectedType] = useState();
  const [selectedOrigin, setSelectedOrigin] = useState();
  const [selectedLocation, setSelectedLocation] = useState();
  const [isCharacteristicSelected, setIsCharacteristicSelected] =
    useState(false);

  const getAllCharacteristics = async (data) => {
    const dat1 = await data;
    const characterisctics = await getCharacteristics(dat1);
  };

  // let charactersDates = [];
  // let uniqueCharactersDates = [];
  let charactersTypes = [];
  let uniqueCharactersTypes = [];
  let charactersOrigins = [];
  let uniqueCharactersOrigins = [];
  let charactersLocations = [];
  let uniqueCharactersLocations = [];

  const getCharacteristics = (data) => {
    try {
      // Get all dates
      // Object.values(data).forEach((data) => charactersDates.push(data.created));
      // charactersDates.forEach((date) =>
      //   uniqueCharactersDates.includes(date)
      //     ? null
      //     : uniqueCharactersDates.push(date)
      // );
      // Get all type
      // data &&
      Object.values(data).forEach((data) => charactersTypes.push(data.type));
      charactersTypes.forEach((date) =>
        uniqueCharactersTypes.includes(date)
          ? null
          : uniqueCharactersTypes.push(date)
      );
      // Get all origin
      // data &&
      Object.values(data).forEach((data) =>
        charactersOrigins.push(data.origin.name)
      );
      charactersOrigins.forEach((date) =>
        uniqueCharactersOrigins.includes(date)
          ? null
          : uniqueCharactersOrigins.push(date)
      );
      // Get all location
      // data &&
      Object.values(data).forEach((data) =>
        charactersLocations.push(data.location.name)
      );
      charactersLocations.forEach((date) =>
        uniqueCharactersLocations.includes(date)
          ? null
          : uniqueCharactersLocations.push(date)
      );
      return (
        // console.log(uniqueCharactersEpisode),
        // setDates(uniqueCharactersDates),
        setLocations(uniqueCharactersLocations),
        setOrigins(uniqueCharactersOrigins),
        setTypes(uniqueCharactersTypes)
      );
    } catch (error) {
      console.log("Charcteristics sorting error", error);
    }
  };
  const charactersDisplay = () => {
    if (
      // selectedDate ||
      selectedLocation ||
      selectedOrigin ||
      selectedType
    ) {
      return (
        charactersData &&
        Object.values(charactersData)
          .filter((data) => {
            switch (
              // selectedDate ||
              selectedLocation ||
              selectedOrigin ||
              selectedType
            ) {
              // case selectedDate:
              //   return data.created === selectedDate;

              case selectedLocation:
                return data.location.name === selectedLocation;

              case selectedOrigin:
                return data.origin.name === selectedOrigin;

              case selectedType:
                return data.type === selectedType;

              default:
                return console.log("y'a R");
            }
          })
          .map((data) => (
            <li>
              <Card key={data.id} character={data} />
            </li>
          ))
      );
    } else {
      return (
        <h3>
          Let's select a <strong>characterisctic</strong>
        </h3>
      );
    }
  };

  const cleanCharacteristics = () => {
    // setSelectedDate();
    setSelectedLocation();
    setSelectedOrigin();
    setSelectedType();
    setIsCharacteristicSelected(false);
    // document.getElementById("dates-select").value = "";
    document.getElementById("locations-select").value = "";
    document.getElementById("origins-select").value = "";
    document.getElementById("types-select").value = "";
  };

  useEffect(() => {
    getAllCharacteristics(charactersData);
  }, [charactersData]);
  return (
    <div className="filtered-characters">
      <header>
        <h1>Rick & Morty Universe</h1>
        <Navigation />
      </header>
      <div className="filters">
        {/* <div className="datesFilter">
          <label for="dates-select">Choose a date:</label>

          <select
            name="dates"
            id="dates-select"
            // onChange={(e) => selectedLocation(e.target.value)}
            onChange={(e) => (
              setSelectedDate(e.target.value),
              charactersDisplay(),
              setIsCharacteristicSelected(true)
            )}
          >
            <option value="">Choose a date</option>
            {dates &&
              dates
                // .sort((a, b) => a.localeCompare(b))
                .map((date) => (
                  <option
                    key={date}
                    value={date}
                    disabled={isCharacteristicSelected ? true : false}
                  >
                    {date}
                  </option>
                ))}
          </select>
        </div> */}
        <div className="locationsFilter">
          <label htmlFor="locations-select">Choose a location:</label>

          <select
            name="locations"
            id="locations-select"
            // onChange={(e) => selectedLocation(e.target.value)}
            onChange={(e) => (
              setSelectedLocation(e.target.value),
              charactersDisplay(),
              setIsCharacteristicSelected(true)
            )}
          >
            <option value="">Choose a location</option>
            {locations &&
              locations
                .sort((a, b) => a.localeCompare(b))
                .map((location) => (
                  <option
                    key={location}
                    value={location}
                    disabled={isCharacteristicSelected ? true : false}
                  >
                    {location}
                  </option>
                ))}
          </select>
        </div>
        <div className="originsFilter">
          <label htmlFor="origins-select">Choose an origin:</label>

          <select
            name="origins"
            id="origins-select"
            // onChange={(e) => selectedorigin(e.target.value)}
            onChange={(e) => (
              setSelectedOrigin(e.target.value),
              charactersDisplay(),
              setIsCharacteristicSelected(true)
            )}
          >
            <option value="">Choose a origin</option>
            {origins &&
              origins
                .sort((a, b) => a.localeCompare(b))
                .map((origin) => (
                  <option
                    key={origin}
                    value={origin}
                    disabled={isCharacteristicSelected ? true : false}
                  >
                    {origin}
                  </option>
                ))}
          </select>
        </div>
        <div className="typesFilter">
          <label htmlFor="types-select">Choose a type:</label>

          <select
            name="types"
            id="types-select"
            // onChange={(e) => selectedtype(e.target.value)}
            onChange={(e) => (
              setSelectedType(e.target.value),
              charactersDisplay(),
              setIsCharacteristicSelected(true)
            )}
          >
            <option value="">Choose a type</option>
            {types &&
              types
                .sort((a, b) => a.localeCompare(b))
                .map((type) => (
                  <option
                    key={type}
                    value={type}
                    disabled={isCharacteristicSelected ? true : false}
                  >
                    {type}
                  </option>
                ))}
          </select>
        </div>
        <div className="buttonContainer">
          <button onClick={() => cleanCharacteristics()}>
            remove characteristics
          </button>
        </div>
      </div>
      <div className="cardContainer">
        <ul>{charactersDisplay()}</ul>
      </div>
    </div>
  );
};

export default CharactersByCharacteristics;
