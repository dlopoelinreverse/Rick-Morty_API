import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Card from "../components/PaginatedCharacters/Card";

const CharactersByEpisode = ({ charactersData }) => {
  const [episode, setEpisode] = useState();
  const [dataByEpisode, setDataByEpisode] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState();
  const [charactersNumberByEpisode, setCharactersNumberByEpisode] = useState();

  // const [isCharacteristicSelected, setIsCharacteristicSelected] =
  //   useState(false);

  const getAllEpisodes = async (data) => {
    const dat1 = await data;
    const episodeNumber = await getEpisodeNumber(dat1);
  };

  let charactersEpisode = [];
  let uniqueCharactersEpisode = [];

  let arrayEp = [];
  let idEpArray = [];
  const getDataByEpisode = () => {
    let dataEpisodeArray = [];
    if (selectedEpisode) {
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
    }
  };
  const getEpisodeNumber = (data) => {
    try {
      // Get all episodes
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

      return setEpisode(uniqueCharactersEpisode);
    } catch (error) {
      console.log("Charcteristics sorting error", error);
    }
  };
  const getNumberChar = () => {
    // return <span>{idEpArray.length}</span>;
    console.log(idEpArray.length);
  };

  // const cleanCharacteristics = () => {
  //   setSelectedEpisode();

  //   setIsCharacteristicSelected(false);

  //   document.getElementById("episode-selected").value = "";
  // };

  useEffect(() => {
    getAllEpisodes(charactersData);
  }, [charactersData]);
  return (
    <div className="filtered-characters">
      <header>
        <h1>Rick & Morty Universe</h1>
        <Navigation />
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
              // charactersDisplay(),
              getDataByEpisode(),
              getNumberChar()

              // setIsCharacteristicSelected(true)
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
                    // disabled={isCharacteristicSelected ? true : false}
                  >
                    {episode}
                  </option>
                ))}
          </select>
          {getNumberChar}
        </div>

        <div className="cardContainer">
          <ul>{getDataByEpisode()}</ul>
        </div>
      </div>
    </div>
  );
};

export default CharactersByEpisode;
