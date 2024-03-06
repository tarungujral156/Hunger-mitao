import RestaurantCard from "./RestaurantCard";

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

export default RestaurantCards;
