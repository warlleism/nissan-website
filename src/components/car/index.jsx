import './style.scss'
import React, { useEffect } from "react";
import Logo from "../logo"
const Car = (props) => {

    useEffect(() => {
        setTimeout(() => {
            A()
        }, 200)
    }, [])

    function A() {
        const data = document?.querySelectorAll('#car')
        for (let i = 0; i < data?.length; i++) {
            data[i].style.filter = 'brightness(100%)'
        }
    }

    return (
        <>
            <Logo />
            <div className='car-main-container' id='car' style={{ transform: props.scale ? "scale(-1,1)" : "scale(1,1)" }}>
                <div className='car'>
                    <div className='desc-car'>
                        <div style={{ marginLeft: props?.margin, transform: props.scale ? "scaleX(-1)" : "scaleX(1)" }}>{props?.titulo}</div>
                        <div style={{ marginLeft: props?.margin, transform: props.scale ? "scaleX(-1)" : "scaleX(1)" }}>{props?.desc}</div>
                    </div>
                    <div className='show-car'>
                        <div className='circle' style={{ left: props.left ? props.left : null, top: props.top ? props.top : null }}></div>
                        <img className='car-img' src={props.img} style={{ transform: props.scale ? "scaleX(-1)" : "scaleX(1)" }} />
                        <img className='poste-img' src={require('../../image/poste.png')} style={{ left: props.poste ? props.poste : null }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Car;