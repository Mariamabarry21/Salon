const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Promotion = sequelize.define('Promotion', {
  code: {
    type: DataTypes.STRING,
    unique: true
  },
  reduction: DataTypes.DECIMAL(5,2),
  date_debut: DataTypes.DATE,
  date_fin: DataTypes.DATE
});

module.exports = Promotion;