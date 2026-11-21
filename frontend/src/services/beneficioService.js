import { httpRequest } from "./httpService";

export function obtenerBeneficiosHome() {
  return httpRequest("/beneficios/home");
}
