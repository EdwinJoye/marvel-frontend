import { Link } from "react-router-dom";
import Caroussel1 from "../components/Caroussel1";
import Caroussel2 from "../components/Caroussel2";

const Home = ({ searchBar }) => {
  // console.log(data.results);
  return (
    <div className="boxesHome">
      <Link to="/comics">
        <div>
          <Caroussel1></Caroussel1>
          <div className="text">
            {" "}
            <span className="sousText">Comics</span>
          </div>
        </div>
      </Link>
      <Link to="/characters">
        <div>
          <Caroussel2></Caroussel2>
          <div className="text">
            <span className="sousText">Characters</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Home;
