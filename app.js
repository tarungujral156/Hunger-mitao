import React from "react";
import ReactDOM from "react-dom/client";
import resList from "./src/utils/restMockData";

/**
 *
 * Header
 * - logo
 * - NavItems
 * Body
 * - SearchBarContaier
 * - Restaurants
 *   - RestaurantCards
 *      -Image
 *      -name
 *      -avgRating
 *      -minimum Time to deliver
 *      -cusines
 *      -address
 * Footer
 *
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.creativefabrica.com/wp-content/uploads/2020/02/12/Food-Logo-Graphics-1-99-580x386.jpg"
          alt="brand-Logo"
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

const RestaurantCard = (props) => {
  return (
    <div className="rest-card">
      <div className="rest-image">
        <div className="image-shadow"></div>
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            props.imageId
          }
          alt="restaurant-image"
        ></img>
      </div>
      <div className="rest-details">
        <h4 id="rest-name">{props.restName}</h4>
        <div className="rating-container">
          <h4 className="rest-avg-rating">★{props.avgRating} </h4>
          <h4 className="min-delivery-time">
            ●{props.deliveryTime - 2} - {props.deliveryTime + 3} mins
          </h4>
        </div>
        <p className="rest-cusines">{props.restCusines.join(", ")}</p>
        <p className="rest-locality">{props.restAdd}</p>
      </div>
    </div>
  );
};

const RestaurantCards = (props) => {
  return (
    <div>
      <div className="restaurants">
        <h2>Restaurants with online food delivery in Meerut</h2>
        <div className="rest-card-container">
          {props.resList.map((restaurant) => {
            const {
              name,
              areaName,
              cuisines,
              avgRating,
              cloudinaryImageId,
              id,
            } = restaurant.info;
            const { deliveryTime } = restaurant.info.sla;
            return (
              <RestaurantCard
                key={id}
                restName={name}
                avgRating={avgRating}
                restAdd={areaName}
                restCusines={cuisines}
                imageId={cloudinaryImageId}
                deliveryTime={deliveryTime}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Body = (props) => {
  return (
    <div>
      <RestaurantCards resList={props.resList} />
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />;
      <Body resList={resList} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
