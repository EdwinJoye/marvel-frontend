import { Link, Navigate } from "react-router-dom";
import Logo from "../img/Logo.svg.png";

const Header = ({ setSearchBar }) => {
  console.log(Navigate);
  return (
    <div>
      <header className="boxHeader">
        <Link to="/">
          <img className="logo" src={Logo} alt="" />
        </Link>
        <input
          className="buttonSearch"
          type="text"
          placeholder="Recherche des articles"
          onChange={(event) => {
            console.log(event.target.value);
            setSearchBar(event.target.value);
          }}
        />
        <Link to="/login">
          <button>Log In</button>
        </Link>
      </header>
    </div>
  );
};

export default Header;
