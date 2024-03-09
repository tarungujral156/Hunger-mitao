import { CDN_URL } from "../utils/constants";
import "../Style/RestaurantCard.css";

const RestaurantCard = (props) => {
  return (
    <div className="rest-card">
      <div className="rest-image">
        <div className="image-shadow"></div>
        <img src={CDN_URL + props.imageId} alt="restaurant-image"></img>
      </div>
      <div className="rest-details">
        <h4 id="rest-name">{props.restName}</h4>

        <h4 className="rest-avg-rating">★{props.avgRating} </h4>
        <h4 className="min-delivery-time">
          ●{props.deliveryTime - 2} - {props.deliveryTime + 3} mins
        </h4>
        <p className="rest-cusines">{props.restCusines.join(", ")}</p>
        <p className="rest-locality">{props.restAdd}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
