import React, { useEffect } from 'react'
import Logo from "../../components/logo"
import Navbar from "../../components/navbar/index"
import './style.scss'

const Buy = () => {

    useEffect(() => {
        setTimeout(() => {
            A()
        }, 200)
    }, [])

    function A() {
        const data = document?.getElementById('car')
        data.style.filter = 'brightness(100%)'
    }

    return (
        <>
            <Logo color={"black"} />
            <Navbar />
            <div className='buy-main-container' id='car'>

                <div className='container-info'>
                    <div className='desc'>
                        <div>Conheça as opções de recarga</div>
                        <div>Mais autonomia para seu dia a dia: você pode recarregar o Nissan LEAF em casa, no escritório ou em diferentes partes da cidade. São facilidades que vão fazer sua experiência com um carro 100% elétrico ainda melhor.</div>
                    </div>
                    <div className='car-img'>
                        <img src={require('../../image/comprar/img1.png')} alt="" />
                    </div>
                </div>

                <div className='container-info' style={{ transform: "scale(-1,1)" }}>
                    <div className='desc'>
                        <div style={{ transform: "scaleX(-1)" }}>Uma experiência de direção única</div>
                        <div style={{ transform: "scaleX(-1)" }}>Você vai viver uma experiência de mobilidade completamente nova, com um carro 100% elétrico. E tem mais: seu Nissan LEAF vem equipado com os sistemas de assistência de condução mais avançados, surpreendentes em cada detalhe. Você está pronto para acelerar no mundo dos elétricos?</div>
                    </div>
                    <div className='car-img'>
                        <img src={require('../../image/comprar/img2.png')} alt="" />
                    </div>
                </div>

                <div className='container-info'>
                    <div className='desc'>
                        <div>100% ELÉTRICO. 100% TECNOLÓGICO.</div>
                        <div>O Nissan LEAF vem com o melhor da tecnologia japonesa, para uma condução elétrica mais avançada e segura.</div>
                    </div>
                    <div className='car-img'>
                        <img src={require('../../image/comprar/img3.png')} alt="" />
                    </div>
                </div>

                <div className='container-info' style={{ transform: "scale(-1,1)" }}>
                    <div className='desc'>
                        <div style={{ transform: "scaleX(-1)" }}>Um design 100% incrível</div>
                        <div style={{ transform: "scaleX(-1)" }}>Só de olhar, você já vai perceber como o design do Nissan LEAF está incrível. Você vai ter linhas sofisticadas e ousadas, com uma poderosa grade V-Motion, rodas esportivas com estilo único e um novo logo 100% incrível.</div>
                    </div>
                    <div className='car-img'>
                        <img src={require('../../image/comprar/img4.png')} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Buy;
