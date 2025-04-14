const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Service = sequelize.define('Service', {
  nom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: DataTypes.TEXT,
  duree: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  prix: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  }
});

module.exports = Service;