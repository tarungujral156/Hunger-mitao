import BestPlace from "./BestPlace";

const BestCuisines = (props)=>{
    return (
        <div>
            <BestPlace bestPlace = {props.cuisines}  />
        </div>
    );
}

export default BestCuisines;