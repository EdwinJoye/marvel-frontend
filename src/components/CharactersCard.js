import { Link } from "react-router-dom";

const CharactersCard = ({ item }) => {
  return (
    item.thumbnail.path !==
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" && (
      <div className="boxComicard">
        <Link to={`/character/${item._id}`}>
          <div>
            <img
              className="torn-paperImagesComics"
              src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              alt="paper"
            />
          </div>

          <div>
            <p className="nomCharacters"> {item.name}</p>
            <p className="descriptionCharacters"> {item.description}</p>
          </div>
        </Link>
      </div>
    )
  );
};

export default CharactersCard;
