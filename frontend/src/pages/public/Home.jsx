import "./Home.css";
import { useState, useEffect } from "react";
import { obtenerCategoriasHome } from "../../services/categoriaService";
import CategoryCarousel from "../../components/categories/CategoryCarousel";

import NavBar from "../../components/common/NavBar";
function Home() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function cargarCategorias() {
      try {
        const datos = await obtenerCategoriasHome();
        setCategorias(datos);
      } catch (error) {
        console.error(error);
      }
    }

    cargarCategorias();
  });
  return (
    <div className="home">
      <NavBar />

      <div className="home-container">
        <CategoryCarousel categorias={categorias} />
      </div>
    </div>
  );
}
export default Home;
