import RestaurantCards from "./RestaurantCards";
import { useEffect, useState } from "react";
import Caurosal from "./Caurosal";
import BestPlace from "./BestPlace";
import BestCuisines from "./BestCuisines.js";
import Footer from "./Footer.js";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [caurosalList, setCaurosalList] = useState([]);
  const [cuisines, setCuisines] = useState({
    title: "Best Cuisines Near Me",
    brands: [
      {
        text: "Chinese Restaurant Near Me",
        link: "https://www.swiggy.com/chinese-restaurants-near-me",
      },
    ],
  });
  const [bestPlace, setBestPlace] = useState({
    title: "Best Places to Eat Across Cities",
    brands: [
      {
        text: "Best Restaurants in Bangalore",
        link: "https://www.swiggy.com/city/bangalore/best-restaurants",
      },
    ],
  });

  useEffect(() => {
    fetchedData();
  }, []);

  const fetchedData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.972062388496095&lng=77.70835157570032&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const { restaurants } =
      json.data.cards[1].card.card.gridElements.infoWithStyle;

    const caurosalData = json?.data?.cards[0]?.card?.card?.imageGridCards?.info;

    const bestPlaceData = json?.data?.cards[6]?.card?.card;

    const cuisines = json?.data?.cards[7]?.card.card;

    setBestPlace(bestPlaceData);
    setCaurosalList(caurosalData);
    setResList(restaurants);
    setCuisines(cuisines);
  };
  return (
    <div>
      <Caurosal caurosalList={caurosalList} />
      <RestaurantCards resList={resList} />
      <BestPlace bestPlace={bestPlace} />
      <BestCuisines cuisines={cuisines} />
      <Footer />
    </div>
  );
};

export default Body;
