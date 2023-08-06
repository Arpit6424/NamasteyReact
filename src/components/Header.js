import logo from "../utils/logo.png";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home Us</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            {" "}
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
