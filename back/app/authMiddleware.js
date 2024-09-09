function isAdmin(req, res, next) {
    if (req.user && req.user.role === 'administrateur') {  // Vérifie si l'utilisateur est admin
      return next();
    }
    return res.status(403).json({ error: "Accès interdit : vous devez être un administrateur." });
  }
  
  export { isAdmin };