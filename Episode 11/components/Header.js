import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState ,useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser}=useContext(userContext);
    console.log(loggedInUser);
    return (
        <div className="flex justify-between bg-grey-100 shadow-lg sm:bg-yellow-50">
            <div className="logoContainer">
                <img className="w-48" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status:{onlineStatus ? " 🟢" : " 🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/About">About Us</Link></li>
                    <li className="px-4"><Link to="/Contact">Contact Us</Link></li>
                    <li className="px-4">Cart</li>
                    <button className="Login" onClick={() => { btnNameReact == "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login") }}>{btnNameReact}</button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
};
export default Header;