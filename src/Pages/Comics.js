import React, { useState, useEffect } from "react";
import axios from "axios";
import ComicsCard from "../components/ComicsCard";

const Comics = ({ searchBar }) => {
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(true);
  const [page, setPage] = useState(1);
  const limit = 20;
  console.log(searchBar);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:3001/comics?title=${searchBar}&limit=${limit}&page=${page}`
      );
      setData(response.data);
      setIsloading(false);
      console.log("passe 1");
    };

    fetchData();
  }, [page, searchBar]);

  // console.log(data.results);
  return isLoading ? (
    <p>En cours de chargement</p>
  ) : (
    <div className="container">
      <div className="boxComics">
        {data.results.map((item, index) => {
          return (
            <div key={index}>
              <ComicsCard item={item}></ComicsCard>
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

export default Comics;