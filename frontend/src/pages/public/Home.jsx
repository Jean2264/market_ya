import "./Home.css";
import { useState, useEffect } from "react";
import { obtenerCategoriasHome } from "../../services/categoriaService";
import { obtenerBeneficiosHome } from "../../services/beneficioService";
import CategoryCarousel from "../../components/categories/CategoryCarousel";
import BenefitCarousel from "../../components/beneficios/BenefitCarousel";

import NavBar from "../../components/common/NavBar";
function Home() {
  const [categorias, setCategorias] = useState([]);
  const [beneficios, setBeneficios] = useState([]);

  useEffect(() => {
    async function cargarCategorias() {
      try {
        const datos = await obtenerCategoriasHome();
        setCategorias(datos);
      } catch (error) {
        console.error(error);
      }
    }

    async function cargarBeneficios() {
      try {
        const datos = await obtenerBeneficiosHome();
        setBeneficios(datos);
      } catch (error) {
        console.error(error);
      }
    }

    cargarCategorias();
    cargarBeneficios();
  });

  return (
    <div className="home">
      <NavBar />

      <div className="home-container">
        <BenefitCarousel beneficios={beneficios} />
        <CategoryCarousel categorias={categorias} />
      </div>
    </div>
  );
}
export default Home;
