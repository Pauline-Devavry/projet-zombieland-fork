// fonction pour gérer les erreurs 404
function notFound(req, res, next) {
  const error = new Error("La ressource n'existe pas");

  error.status = 404;

  next(error);
}

// fonction pour gérer les erreurs
function errorHandler(error, req, res, next) {

  const status = error.status || 500;

  res.status(status).json({ message: error.message });
}

export { notFound, errorHandler };
