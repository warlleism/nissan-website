import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import './style.scss'

const Logo = () => {

    useEffect(() => {
        window.addEventListener("scroll", () => {
            let data = document?.getElementById('logo')
            const dados = window.scrollY > 100 ? data.style.background = "linear-gradient(to left, #1c1b1b0e 50%, #000000bb)" : data.style.background = "linear-gradient(to left, #1c1b1b25 50%, #00000065)";
        })
    }, [])

    return (
        <Link to={"/"}>
            <div className="logo" id="logo">
                <p>NISSAN</p>
            </div>
        </Link>

    )
}

export default Logo;