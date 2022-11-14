import React from "react";
import './style.scss'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">

            <Link to={"/"}>
                <div className="menu-bar">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </Link>


            <div className="icon">

                <Link to={"/"}>
                    <span class="material-symbols-outlined">
                        home
                    </span>
                </Link>

                <Link to={"/car"}>
                    <span class="material-symbols-outlined">
                        directions_car
                    </span>
                </Link>
                <Link to={"/buy"}>
                    <span class="material-symbols-outlined">
                        shopping_cart
                    </span>
                </Link>
                <Link to={"/car"}>
                    <span class="material-symbols-outlined">
                        star
                    </span>
                </Link>
            </div>

            <div className="login-logout">
                <span class="material-symbols-outlined">
                    logout
                </span>
                <span class="material-symbols-outlined">
                    login
                </span>
            </div>

        </div>
    )
}

export default Navbar;