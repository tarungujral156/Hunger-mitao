import { LOGO_URL } from "../utils/constants";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL} alt="brand-Logo"
        ></img>
        <h3>ORDER NOW</h3>
      </div>
      <nav>
        <ul className="nav-items">
          <li>Search</li>
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
