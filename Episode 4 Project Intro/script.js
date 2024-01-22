import React from "react";
import ReactDOM from "react-dom/client";
/*
  *Header
  *   - Logo
  *   - Nav Items
  * Body
  *   - Search
  * Resturant Container
  *   - Resturant Card
  *     - Img
  *     - Name of Resturant,Cuisines,Star Rating
  * Footer
  *   - Copyright
  *   - Links
  *   - Address
  *   - Contacts
*/
const Header = () => {
    return (
        <div className="header">
            <div className="logoContainer">
                <img className="logo" src="https://images-platform.99static.com/v84irzbNBd5aawXGKXfH4SEjcn0=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/117/117132/attachment_117132760"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};
const ResturantCard = (props) => {
    const{resName,cuisines,ratings,time}=props;
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/ln3dsq7bdjrdv706hkuo"></img>
            <h3>{resName}</h3>
            <h4>{cuisines}</h4>
            <h4>{ratings}</h4>
            <h4>{time}</h4>
        </div>
    );
};
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <ResturantCard resName="Black Pepper" cuisines="Biryani,North Indian" ratings="4.4" time="38 minutes"/>
                <ResturantCard resName="Bruger King" cuisines="Burgers,Cold Drinks" ratings="4.2" time="55 minutes"/>
            </div>
        </div>
    );
};
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);