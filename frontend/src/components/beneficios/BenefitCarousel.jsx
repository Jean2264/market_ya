import "./BenefitCarousel.css";
import { useRef, useState, useEffect } from "react";

import BenefitCard from "./BenefitCard";

function BenefitCarousel({ beneficios }) {
  const carouselRef = useRef(null);

  const [enInicio, setEnInicio] = useState(true);
  const [enFinal, setEnFinal] = useState(false);

  //funcion para flecha derecha
  function moverDerecha() {
    carouselRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  }

  //funcion para flecha izquierda
  function moverIzquierda() {
    carouselRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  }

  //funcion para comprobar los limites para la visibilidad de las flechas
  function comprobarLimites() {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const estaEnInicio = carousel.scrollLeft <= 0;

    const estaEnFinal =
      carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 1;

    setEnInicio(estaEnInicio);
    setEnFinal(estaEnFinal);
  }

  useEffect(() => {
    requestAnimationFrame(() => {
      comprobarLimites();
    });
  }, [beneficios]);

  return (
    <div className="benefit-carousel">
      {/**<div className="carousel-header">
        <h2>Beneficios exclusivos</h2>
      </div> */}

      <div className="carousel-body">
        {!enInicio && (
          <button className="btn-arrow btn-arrow-left" onClick={moverIzquierda}>
            <i className="bi bi-arrow-left-short"></i>
          </button>
        )}
        <div
          ref={carouselRef}
          className="carousel-contain"
          onScroll={comprobarLimites}
        >
          {beneficios.map((beneficio) => (
            <BenefitCard key={beneficio.idbeneficio} beneficio={beneficio} />
          ))}
        </div>
        {!enFinal && (
          <button className="btn-arrow btn-arrow-right" onClick={moverDerecha}>
            <i className="bi bi-arrow-right-short"></i>
          </button>
        )}
      </div>
    </div>
  );
}

export default BenefitCarousel;
