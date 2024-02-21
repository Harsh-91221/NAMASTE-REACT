import React, { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const [isLogged, setIsLogged] = useState(false);
    const handleLogin = () => setIsLogged(!isLogged);
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(userContext);
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between bg-white z-10 shadow-md">
            <div className="logoContainer p-3  w-4/5 m-auto flex justify-between items-center">
                <img className="w-20 rounded-full" src={LOGO_URL} alt="Logo"></img>
            </div>
            <div className="flex items-center">
                <ul className="h-full flex justify-between gap-5 text-xl">
                    <Link to="/">
                        <li className="px-3 py-2">Home</li>
                    </Link>

                    <Link to="/about">
                        <li className="px-3 py-2">About</li>
                    </Link>

                    <Link to="/contact">
                        <li className="px-3 py-2">Contact</li>
                    </Link>
                </ul>
                <ul className="h-full flex justify-end gap-5 text-xl">
                    <li>
                        <Link to="/cart" className="flex items-center px-3 py-2 text-gray-700">
                            <FontAwesomeIcon icon={faCartShopping} />
                            <span className="ml-1">{cartItems.length}</span>
                        </Link>
                    </li>

                    <li>
                        <div
                            className="rounded-full"
                            style={
                                onlineStatus
                                    ? { backgroundColor: "lightgreen", width: "1px", height: "1px" }
                                    : { backgroundColor: "gray", width: "1px", height: "1px" }
                            }
                        ></div>
                        <button className="bg-gray-700 text-white px-3 py-2 rounded transition duration-150 hover:bg-white hover:text-gray-700 hover:border-gray-700" onClick={handleLogin}>
                            {isLogged ? "Logout" : "Login"}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
