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
        <div className="boxButtonSignInLogIn">
          <Link to="/signup">
            <button
              href="#"
              className="buttonSignInLogIn buttonSignInLogIn:before buttonSignInLogIn:after"
            >
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button
              href="#"
              className="buttonSignInLogIn buttonSignInLogIn:before buttonSignInLogIn:after"
            >
              Log In
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
