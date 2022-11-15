import './style.scss'
import Logo from "../logo"
import React, { useEffect } from "react";

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
            <div className='car-main-container' id='car' style={{ transform: props.scale ? "scale(-1,1)" : null }}>
                <div className='car'>
                    <div className='desc-car'>
                        <div style={{ marginLeft: props?.margin, transform: props.scale ? "scaleX(-1)" : null }}>{props?.titulo}</div>
                        <div style={{ marginLeft: props?.margin, transform: props.scale ? "scaleX(-1)" : null }}>{props?.desc}</div>
                    </div>
                    <div className='show-car'>
                        <div className='circle' style={{ transform: props.scale ? "scaleX(-1)" : null }}></div>
                        <img className='car-img' src={props.img} style={{ transform: props.scale ? "scaleX(1)" : null }} />
                        <img className='poste-img' style={{ transform: props.scale ? "scaleX(-1)" : null }} src={require('../../image/poste.png')} />
                    </div>
                </div>
            </div>

            <div className='car-main-container-mobile' id='car'>
                <div className='car-mobile'>
                    <div>{props?.titulo}</div>
                    <div>{props?.desc}</div>
                    <img className='neon' src={require('../../image/neon2.png')} alt="" />
                    <img className='car-img-mobile' src={props.img} />
                </div>
            </div>
        </>
    )
}

export default Car;