const API_URL = "http://localhost:3000";

export async function obtenerCategoriasHome() {
  const respuesta = await fetch(`${API_URL}/api/categorias/home`);

  if (!respuesta.ok) {
    throw new Error("Error al obtener la scategorias");
  }

  return respuesta.json();
}
