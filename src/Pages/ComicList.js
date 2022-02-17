import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CommicList = ({ searchBar }) => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(true);
  const [page, setPage] = useState(1);
  const limit = 10;

  console.log(setPage);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:3001/character/${id}?name=${searchBar}&limit=${limit}&page=${page}`
      );
      setData(response.data);
      setIsloading(false);
    };
    fetchData();
  }, [page, searchBar, id]);

  console.log("DATA COMIC LIST : ", data);
  return isLoading ? (
    <p>En cours de chargement</p>
  ) : (
    <div className="container">
      <div className="boxComics">
        {data.comics.map((item, index) => {
          return (
            item.thumbnail.path !==
              "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" && (
              <div key={index}>
                <img
                  className="comicsCover"
                  src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  alt="charac"
                />
              </div>
            )
          );
        })}
        ;
      </div>
    </div>
  );
};

export default CommicList;
