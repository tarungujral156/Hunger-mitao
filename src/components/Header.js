import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import "../Style/Header.css";

const Header = () => {
  const [login, setLogin] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="brand-Logo"></img>
        <h3>HUNGER MITAO</h3>
      </div>
      <nav>
        <ul className="nav-items">
          <li>Search</li>
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
          <button
            onClick={() => {
              setLogin(login === "Login" ? "Logout" : "Login");
            }}
          >
            {login}
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
