import { Link } from "react-router-dom";

const ComicsCard = ({ item }) => {
  return (
    item.thumbnail.path !==
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" && (
      <div className="boxComicard">
        <Link to="/characterCard">
          <div>
            <img
              className="torn-paperImagesCharacters"
              src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              alt="charac"
            />
          </div>

          <div>
            <p className="nomCharacters"> {item.name}</p>
            <p className="descriptionCharacters"> {item.description} </p>
          </div>
        </Link>
      </div>
    )
  );
};

export default ComicsCard;
