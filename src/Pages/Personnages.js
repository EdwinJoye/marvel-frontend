import { useState, useEffect } from "react";
import axios from "axios";
import CharactersCard from "../components/CharactersCard";

const Personnages = (searchBar) => {
  const [isLoading, setIsloading] = useState(true);
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  // const limit = 20;
  // console.log(searchBar);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:3001/characters?name=${searchBar}`
      );
      console.log({ response });
      setData(response.data);
      setIsloading(false);
    };

    fetchData();
  }, [page, searchBar]);

  return isLoading ? (
    <p>En cours de chargement</p>
  ) : (
    <div className="container">
      <div className="boxCharacters">
        {data.results.map((item, index) => {
          return (
            <div key={index}>
              <CharactersCard item={item}></CharactersCard>
            </div>
          );
        })}
        ;
      </div>
      <button
        className="buttonPagePrécédenteSuivante"
        onClick={() => setPage(page - 1)}
      >
        Page précédente
      </button>
      <button
        className="buttonPagePrécédenteSuivante"
        onClick={() => setPage(page + 1)}
      >
        Page suivante
      </button>
    </div>
  );
};

export default Personnages;
