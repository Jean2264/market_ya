import API_URL from "../config/api";

export class HttpError extends Error {
  constructor(message, status, details = null) {
    super(message);

    this.name = "HttpError";
    this.status = status;
    this.details = details;
  }
}

export async function httpRequest(endpoint, options = {}) {
  const respuesta = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      ...options.headers,
    },
  });

  if (!respuesta.ok) {
    let detalles = null;

    try {
      detalles = await respuesta.json();
    } catch {
      detalles = null;
    }

    const mensaje =
      detalles?.mensaje ||
      detalles?.message ||
      `Error HTTP ${respuesta.status}: ${respuesta.statusText}`;

    throw new HttpError(mensaje, respuesta.status, detalles);
  }

  if (respuesta.status === 204) {
    return null;
  }

  return respuesta.json();
}
