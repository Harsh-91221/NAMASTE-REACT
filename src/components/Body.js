import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
    const [listofRestaurant, setlistofRestaurant] = useState([]);
    const [searchText, setsearchText] = useState("");
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4808184&lng=77.5177682&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setlistofRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    if (listofRestaurant.length == 0) {
        return <Shimmer />
    }
    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="searchBox" value={searchText} onChange={(e) => {
                        setsearchText(e.target.value);
                    }} />
                    <button onClick={() => {
                        console.log(searchText);
                        const filteredRestaurant = listofRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setlistofRestaurant(filteredRestaurant);
                    }}>search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listofRestaurant.filter((res) => res.info.avgRating > 4);
                    setlistofRestaurant(filteredList);
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                    listofRestaurant.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant} />))
                }
            </div>
        </div>
    );
};
export default Body;