const API_URL = "http://localhost:3000";

export async function obtenerBeneficiosHome() {
  const respuesta = await fetch(`${API_URL}/api/beneficios/home`);

  if (!respuesta.ok) {
    throw new Error("Error al obtener beneficios");
  }
  return respuesta.json();
}
