import { httpRequest } from "./httpService";

export function obtenerSeccionesHome() {
  return httpRequest("/secciones/home");
}
