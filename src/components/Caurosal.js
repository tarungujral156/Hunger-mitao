import { useEffect ,useState} from "react";
import "../Style/Caurosal.css";
import { CDN_URL } from "../utils/constants";

const Caurosal = (props) => {

  return (
    <div className="caurosal">
      <h1 className="title">Tarun, what's in your mind ?</h1>
      <div className="flex">
        {
         props.caurosalList.map((card)=>
            <img key={card.id} src={CDN_URL + card.imageId} />
          )

        }
      
      </div>
    </div>
  );
};

export default Caurosal;
