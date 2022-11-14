import React, { useEffect } from "react";
import Logo from "../../components/logo";
import Navbar from "../../components/navbar";
import './style.scss'

const Home = () => {

    useEffect(() => {
        setTimeout(() => {
            A()
        }, 200)
    }, [])

    function A() {
        const data = document?.getElementById('car')
        data.style.filter = 'brightness(80%)'
    }

    return (
        <>
            <Navbar />
            <div className="home-page" id="car">
                <Logo />
                <div className="container-marca">
                    <div>THE</div>
                    <div>NISSAN</div>
                    <div>UM MOTOR COM CAVALOS AJUSTADO COM PAIXÃO</div>
                </div>
                <div className="info">
                    <div className="info-content">
                        <div>88</div>
                        <p>Anos de nissan</p>
                    </div>
                    <div className="info-content">
                        <div>88</div>
                        <p>Anos de nissan</p>
                    </div>
                    <div className="info-content">
                        <div>88</div>
                        <p>Anos de nissan</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;