import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4808184&lng=77.5177682&restaurantId=28798&catalog_qa=undefined&submitAction=ENTER");
            const json = await data.json();
            console.log(json);
            setResInfo(json.data);
        } catch (error) {
            console.error("Error fetching menu:", error);
        }
    };

    if (resInfo === null) {
        return <Shimmer />;
    }

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const { itemCards } = resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
    console.log(itemCards);
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        {itemCards.map((item) => (<li>{item.card.info.name} - {"Rs."}{item.card.info.Price / 100 || item.card.info.defaultPrice / 100}</li>))}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;
