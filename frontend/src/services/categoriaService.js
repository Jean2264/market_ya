import { httpRequest } from "./httpService";

export function obtenerCategoriasHome() {
  return httpRequest("/categorias/home");
}
