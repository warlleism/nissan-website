import React, { useEffect, useState } from "react";
import './style.scss'
import { Link } from 'react-router-dom';

const Navbar = (props) => {

    const [cont, setCont] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            if (props.heigth) {
                showData()
            }
        }, 200)
    }, [])


    const showData = () => {
        const itens = document?.querySelectorAll('#icones')
        const menu = document?.querySelector('#menu')

        if (cont != 0) {
            for (let i = 0; i < itens?.length; i++) {
                itens[i].style.display = 'none'
                itens[i].style.opacity = 0
            }
            menu.style.height = '6vh'
            setCont(cont - 1)
        } else {
            menu.style.height = '100vh'
            for (let i = 0; i < itens?.length; i++) {
                itens[i].style.display = 'block'
            }
            setTimeout(() => {
                setCont(cont + 1)
                for (let i = 0; i < itens?.length; i++) {
                    itens[i].style.opacity = 1
                }
            }, 1000);
        }

    }

    return (
        <div className="navbar" id="menu">

            <div className="menu-bar" onClick={() => showData()}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className="icon">

                <Link to={"/"}>
                    <span id="icones" className="material-symbols-outlined" >
                        home
                    </span>
                </Link>

                <Link to={"/car"}>
                    <span id="icones" className="material-symbols-outlined" >
                        directions_car
                    </span>
                </Link>
                <Link to={"/buy"}>
                    <span id="icones" className="material-symbols-outlined" >
                        shopping_cart
                    </span>
                </Link>
                <Link to={"/car"}>
                    <span id="icones" className="material-symbols-outlined" >
                        star
                    </span>
                </Link>
            </div>

            <div className="login-logout">
                <span id="icones" className="material-symbols-outlined" >
                    logout
                </span>
                <span id="icones" className="material-symbols-outlined" >
                    login
                </span>
            </div>

        </div>
    )
}

export default Navbar;