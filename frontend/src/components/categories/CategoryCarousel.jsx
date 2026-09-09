import "./CategoryCarousel.css";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";

function CategoryCarousel({ categorias }) {
  //nos permite guardar una referencia directa al elemento html

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
  }, [categorias]);

  return (
    <div className="category-carousel">
      <div className="carousel-header">
        <h2>
          Explorar <strong>categorias</strong>
        </h2>

        <Link className="cat-link" to="/categorias">
          Ver más
        </Link>
      </div>
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
          {categorias.map((categoria) => (
            <CategoryCard key={categoria.idcategoria} categoria={categoria} />
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

export default CategoryCarousel;
