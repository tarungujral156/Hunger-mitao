import "../Style/bestPlace.css";
import { useEffect, useState } from "react";


const BestPlace = (props) => {
  const { brands, title } = props.bestPlace;
  
  // console.log(someBrands)

  return (
    <div className="best-place">
      <h2 className="title">{title}</h2>

      <div className="best-place-container">
        {brands.map((title) => (
          <div key={title.text} className="place-card">
            <p>{title.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestPlace;
