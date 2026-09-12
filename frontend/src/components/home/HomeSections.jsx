import "./HomeSections.css";
import { useEffect, useState } from "react";
import { obtenerSeccionesHome } from "../../services/seccionService";
import HomeSection from "./HomeSection";
function HomeSections() {
  const [secciones, setSecciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function cargarSecciones() {
      try {
        const data = await obtenerSeccionesHome();
        console.log("respuesta de secciones: ", data);
        setSecciones(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    cargarSecciones();
  }, []);

  if (loading) {
    return <p>Cargando secciones</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section>
      {secciones.map((seccion) => (
        <HomeSection seccion={seccion} />
      ))}
    </section>
  );
}

export default HomeSections;
