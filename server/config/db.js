const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD, // Doit être une chaîne non vide
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    dialectOptions: {
      connectTimeout: 60000 // Pour les problèmes de timeout
    }
  }
);
