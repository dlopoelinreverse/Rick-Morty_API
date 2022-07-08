import React, { useEffect, useState } from "react";
import Characteristics from "../components/AllCharacters/Characteristics";
import Card from "../components/PaginatedCharacters/Card";

const AllCharactersFromApp = ({ charactersData }) => {
  const [episode, setEpisode] = useState();

  const [dates, setDates] = useState();
  const [types, setTypes] = useState();
  const [origins, setOrigins] = useState();
  const [locations, setLocations] = useState();
  const [selectedEpisode, setSelectedEpisode] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const [selectedType, setSelectedType] = useState();
  const [selectedOrigin, setSelectedOrigin] = useState();
  const [selectedLocation, setSelectedLocation] = useState();
  const [isCharacteristicSelected, setIsCharacteristicSelected] =
    useState(false);

  const getAllCharacteristics = async (data) => {
    const dat1 = await data;
    const characterisctics = await getCharacteristics(dat1);
    // console.log(characterisctics);
    // const episodeNum = await episodeNumber();
  };

  let charactersEpisode = [];
  let uniqueCharactersEpisode = [];
  let charactersDates = [];
  let uniqueCharactersDates = [];
  let charactersTypes = [];
  let uniqueCharactersTypes = [];
  let charactersOrigins = [];
  let uniqueCharactersOrigins = [];
  let charactersLocations = [];
  let uniqueCharactersLocations = [];

  const getCharacteristics = (data) => {
    try {
      Object.values(data).forEach((data) =>
        charactersEpisode.push(data.episode)
      );

      charactersEpisode.forEach((episode) =>
        episode.forEach((ep) =>
          uniqueCharactersEpisode.includes(ep.slice(40, 43))
            ? null
            : uniqueCharactersEpisode.push(ep.slice(40, 43))
        )
      );
      Object.values(data).forEach((data) => charactersDates.push(data.created));
      charactersDates.forEach((date) =>
        uniqueCharactersDates.includes(date)
          ? null
          : uniqueCharactersDates.push(date)
      );
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
        setEpisode(uniqueCharactersEpisode),
        // console.log(uniqueCharactersEpisode),
        setDates(uniqueCharactersDates),
        setLocations(uniqueCharactersLocations),
        setOrigins(uniqueCharactersOrigins),
        setTypes(uniqueCharactersTypes)
      );
    } catch (error) {
      console.log("Charcteristics sorting error", error);
    }
  };
  const charactersDisplay = () => {
    let arrayEp = [];
    let idEpArray = [];
    if (
      // selectedEpisode ||
      selectedDate ||
      selectedLocation ||
      selectedOrigin ||
      selectedType
    ) {
      return (
        charactersData &&
        Object.values(charactersData)
          .filter((data) => {
            switch (
              // selectedEpisode ||
              selectedDate ||
              selectedLocation ||
              selectedOrigin ||
              selectedType
            ) {
              // case selectedEpisode:
              //   // return data.episode.includes(selectedEpisode);
              //   return data.episode.forEach((ep) => ep.includes(episode));

              case selectedDate:
                return data.created === selectedDate;

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
            // <div className="card" key={data.id}>
            //   <h6>{data.name}</h6>
            //   <img src={data.image} alt="" />
            // </div>
            <li>
              <Card key={data.id} character={data} />
            </li>
          ))
      );
    } else if (selectedEpisode) {
      //  extraire l'id et les numéros d'épisodes
      charactersData &&
        Object.values(charactersData).map((data) => {
          {
            arrayEp.push([data.id, data.episode.map((ep) => ep.slice(40, 43))]);
          }
        });
      // a l'input récupérer les id
      arrayEp
        .filter((character) =>
          character[1].map((epNum) => epNum).includes(`${selectedEpisode}`)
        )
        .map((character) => idEpArray.push(character[0]));
      // filter la data avec l'id
      return Object.values(charactersData)
        .filter((character) => idEpArray.includes(character.id))
        .map((data) => (
          <li>
            <Card key={data.id} character={data} />
          </li>
        ));
    } else {
      return (
        <h3>
          Let's select a <strong>characterisctic</strong>
        </h3>
      );
    }
  };

  const cleanCharacteristics = () => {
    // setSelectedEpisode();
    setSelectedDate();
    setSelectedLocation();
    setSelectedOrigin();
    setSelectedType();
    setIsCharacteristicSelected(false);
    document.getElementById("dates-select").value = "";
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
      </header>
      <div className="filters">
        <div className="episodeFilter">
          <label for="episode-select">Choose an episode:</label>

          <select
            name="episode"
            id="episode-select"
            // onChange={(e) => selectedLocation(e.target.value)}
            onChange={(e) => (
              setSelectedEpisode(e.target.value),
              charactersDisplay(),
              setIsCharacteristicSelected(true)
            )}
          >
            <option value="">Choose an episode</option>
            {episode &&
              episode
                // .sort((a, b) => a.localeCompare(b))
                .map((episode) => (
                  <option
                    key={episode}
                    value={episode}
                    disabled={isCharacteristicSelected ? true : false}
                  >
                    {episode}
                  </option>
                ))}
          </select>
        </div>
        <div className="datesFilter">
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
        </div>
        <div className="locationsFilter">
          <label for="locations-select">Choose a location:</label>

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
          <label for="origins-select">Choose an origin:</label>

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
          <label for="types-select">Choose a type:</label>

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
        <Characteristics date={selectedDate} />
      </div>
      <div className="cardContainer">
        <ul>{charactersDisplay()}</ul>
      </div>
      {/* {episodeNumber()} */}
    </div>
  );
};

export default AllCharactersFromApp;
