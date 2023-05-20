import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import c2 from '../images/carrusel_2.jpg'
import c4 from '../images/carrusel_4.jpg'



const Inicio = () => {
  return (
    <Carousel>
      
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={c4}
          alt="First slide" width="1200px" height="625px"
        />
        <Carousel.Caption>
          <h3>Volkswagen Jetta GLI</h3>
          <p>El auto deportivo sedán más innovador del mercado con motor 2.0 L y 230 Hp.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={c2}
          alt="Second slide" width="1200px" height="625px"
        />
        <Carousel.Caption>
          <h3>Ford Mustang GT</h3>
          <p>Motor de 427 pulgadas cúbicas incorporaba frenos de disco delanteros, neumáticos de alto rendimiento y suspensión específica</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  )
}

export default Inicio