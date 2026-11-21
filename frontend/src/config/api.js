const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  throw new Error("No se configuró VITE_API_URL  en el archivo .env");
}

export default API_URL;
