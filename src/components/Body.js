import RestaurantCards from "./RestaurantCards";
const Body = (props) => {
  return (
    <div>
      <RestaurantCards resList={props.resList} />
    </div>
  );
};

export default Body;
