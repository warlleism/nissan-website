import React from "react";
import Car from "../../components/car/index"
import Navbar from "../../components/navbar"
const Dealership = () => {

    return (
        <>
            <Navbar heigth={"100vh"} />
            <Car
                titulo={"Nissan Skyline GT-R R34"}
                desc={"O veículo possui motor 3. 8 V6 biturbo de 550cv (original), câmbio automático de 6 marchas e tração integral."}
                img={require('../../image/Nissan-Skyline-GT-R-R34.png')}
            />
            <Car
                titulo={"Nissan Skyline GT-R R34"}
                desc={"O veículo possui motor 3. 8 V6 biturbo de 550cv (original), câmbio automático de 6 marchas e tração integral."}
                scale={true}
                img={require('../../image/Nissan-Skyline-GT-R-R34.png')}
            />
            <Car
                titulo={"Nissan Skyline GT-R R34"}
                desc={"O veículo possui motor 3. 8 V6 biturbo de 550cv (original), câmbio automático de 6 marchas e tração integral."}
                img={require('../../image/Nissan-Skyline-GT-R-R34.png')} />
            <Car
                titulo={"Nissan Skyline GT-R R34"}
                desc={"O veículo possui motor 3. 8 V6 biturbo de 550cv (original), câmbio automático de 6 marchas e tração integral."}
                scale={true}
                img={require('../../image/Nissan-Skyline-GT-R-R34.png')}
            />
        </>
    )
}

export default Dealership;