import React from "react";
import Car from "../../components/car/index"
import Navbar from "../../components/navbar"
const Dealership = () => {
    return (
        <>
            <Navbar />
            <Car
                titulo={"Nissan Skyline GT-R R34"}
                desc={"O veículo possui motor 3. 8 V6 biturbo de 550cv (original), câmbio automático de 6 marchas e tração integral."}
                img={require('../../image/Nissan-Skyline-GT-R-R34.png')}
            />

            <Car
                scale={true}
                img={require('../../image/car3.png')}
                left={-130}
                poste={500}
                top={300}
                margin={100}
                width={"74%"}
                titulo={"GT-R Premium - Black Nissan Gtr 2017"}
                desc={"O veículo possui motor 3. 8 V6 biturbo de 550cv (original), câmbio automático de 6 marchas e tração integral."}
            />
            <Car
                leftCar={150}
                poste={600}
                width={"65%"}
                titulo={"Nissan Juke"}
                desc={"Novo Nissan JUKE Híbrido Uma experiência eletrificada emocionante"}
                img={require('../../image/car4.png')} />
            <Car
                scale={true}
                img={require('../../image/car5.png')}
                left={-130}
                leftCar={-160}
                poste={500}
                margin={100}
                top={240}
                titulo={"Nissan Almera Car Malaysia Nissan X-Trail"}
                desc={"SUV de tecnologia avançada que torna cada condução mais confiante, segura e agradável. Com 5 Anos de garantia, Serviço de Manutenção Gratuito 5X e IMPUL Aerokit no valor de RM5.600. 5 anos de garantia. Segurança inteligente. Grátis IMPUL Aerokit. Manutenção 5X gratuita."}
            />
        </>
    )
}

export default Dealership;