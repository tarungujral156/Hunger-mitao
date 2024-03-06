import React from "react";
import ReactDOM from "react-dom/client";
import resList from "./utils/restMockData";
import Header from "./components/Header";
import Body from "./components/Body";

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
