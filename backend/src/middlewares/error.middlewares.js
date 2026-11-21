function manejarError(error, req, res, next) {
  console.error(error);

  if (res.headersSent) {
    return next(error);
  }

  const status = error.status || error.statusCode || 500;

  res.status(status).json({
    mensaje:
      error.isOperational && status !== 500
        ? error.message
        : "Ocurrió un error interno en el servidor",
  });
}
module.exports = manejarError;
