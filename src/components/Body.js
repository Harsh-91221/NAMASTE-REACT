import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";
const Body = () => {
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    resObj = resObj.filter((res) => res.info.avgRating > 4);
                    console.log(resObj);
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                    resObj.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant} />))
                }
            </div>
        </div>
    );
};
export default Body;