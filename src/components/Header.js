import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState("Login");
    return (
        <div className="header">
            <div className="logoContainer">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="Login" onClick={() => { btnNameReact == "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login") }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
};
export default Header;