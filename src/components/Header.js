import { Link } from "react-router-dom";
import Logo from "../img/Logo.svg.png";

const Header = ({ setSearchBar }) => {
  return (
    <div>
      <header className="boxHeader">
        <div className="boxLogoSearch">
          <Link to="/">
            <img className="logo" src={Logo} alt="" />
          </Link>
          <input
            className="buttonSearch"
            type="text"
            placeholder="Search"
            onChange={(event) => {
              setSearchBar(event.target.value);
            }}
          />
        </div>
        <div>
          <Link to="/signup">
            <button className="buttonSignInLogIn">Sign Up</button>
          </Link>
          <Link to="/login">
            <button className="buttonSignInLogIn">Log In</button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
