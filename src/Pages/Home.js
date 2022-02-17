import { Link } from "react-router-dom";
import Header3 from "../img/Header3.jpg";
import character from "../img/characters.jpg";
import comics from "../img/comics.jpg";

const Home = ({ searchBar }) => {
  // console.log(data.results);
  return (
    <div className=" body">
      {" "}
      <img className="Banner" src={Header3} alt="" />{" "}
      <div className="boxesHome">
        <Link to="/comics">
          <div className="boxTitre">Comics</div>
          <div>
            <img className="imagesHomes" src={character} alt="" />
          </div>
        </Link>
        <Link to="/characters">
          <div className="boxTitre">Characters</div>
          <img className="imagesHomes" src={comics} alt="" />
        </Link>
        <Link to="favoris">
          <div className="boxTitre">Favoris</div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
