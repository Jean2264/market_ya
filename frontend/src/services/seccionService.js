const API_URL = "http://localhost:3000";

export async function obtenerSeccionesHome() {
  const respuesta = await fetch(`${API_URL}/api/secciones/home`);

  if (!respuesta.ok) {
    throw new Error("Error al obtener seccions");
  }
  return respuesta.json();
}
