import { useState, useEffect } from "react";
import axios from "axios";
import CharactersCard from "../components/CharactersCard";

const Personnages = (searchBar) => {
  const [isLoading, setIsloading] = useState(true);
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const limit = 20;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://online-exam-mern.herokuapp.com/characters?name=${searchBar}&limit=${limit}&page=${page}`
      );
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
      <div className="boxButtonPrécédenteSuivante">
        <button
          className="buttonPagePrécédenteSuivante"
          onClick={() => setPage(page - 1)}
        >
          Page précédente
        </button>
        <div className="boxEntreButtons"></div>
        <button
          className="buttonPagePrécédenteSuivante"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Page suivante
        </button>
      </div>
    </div>
  );
};

export default Personnages;
