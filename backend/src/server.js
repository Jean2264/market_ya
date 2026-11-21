const app = require("./app");

const env = require("./config/env");

app.listen(env.port, () => {
  console.log(`Servidor ejecutandose en el puerto ${env.port}`);
});
