import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import About from "./about";
const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState("Login");
    return (
        <div className="header">
            <div className="logoContainer">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About Us</Link></li>
                    <li><Link to="/Contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="Login" onClick={() => { btnNameReact == "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login") }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
};
export default Header;