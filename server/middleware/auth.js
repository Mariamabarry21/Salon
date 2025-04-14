// server/middleware/auth.js
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; // "Bearer TOKEN"
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    req.userData = decoded; // Stocke les données utilisateur
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Authentification échouée'
    });
  }
};