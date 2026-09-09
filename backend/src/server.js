//Traigo la aplicacion que configure en app.js
const app = require("./app");

//digo en que puerto quiero ejecutar el servidor
const PORT = process.env.PORT || 3000;
//si hay un puerto en las variables de entorno la uso de lo contrario uso el puerto 3000

//el siguente bloque dice:
//"Empieza a escuchar peticiones HTTP en este puerto"

app.listen(PORT, () => {
  console.log(`Servidor ejecutandose en el puerto ${PORT}`);
});

//NOTACION: server.js -> es el punto de entrada del backend. Importa la app Express y la pone a escuchar
//en un puerto determinado.
