import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import './style.scss'

const Logo = (props) => {

    useEffect(() => {
        window.addEventListener("scroll", () => {
            let data = document?.getElementById('logo')
            const dados = window.scrollY > 100 ? data.style.backgroundColor = '#00000056' : data.style.backgroundColor = '#0000001e'

        })
    }, [])

    return (
        <Link to={"/"}>
            <div className="logo" id="logo">
                <p style={{ color: props?.color }}>NISSAN</p>
            </div>
        </Link>

    )
}

export default Logo;