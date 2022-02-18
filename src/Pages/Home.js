import { Link } from "react-router-dom";
import Header3 from "../img/Header3.jpg";
import character from "../img/characters.jpg";
import comics from "../img/comics.jpg";
import Footer from "../components/Footer";

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
            <img className="imagesHome" src={comics} alt="" />
          </div>
        </Link>
        <Link to="/characters">
          <div className="boxTitre">Characters</div>
          <img className="imagesHome" src={character} alt="" />
        </Link>
        <Link to="favoris">
          <div className="boxTitre">Favoris</div>
        </Link>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
