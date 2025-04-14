const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Reservation = sequelize.define('Reservation', {
  date_heure: {
    type: DataTypes.DATE,
    allowNull: false
  },
  statut: {
    type: DataTypes.ENUM('confirmé', 'annulé', 'en_attente'),
    defaultValue: 'en_attente'
  },
  notes: DataTypes.TEXT
});

module.exports = Reservation;