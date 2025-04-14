// models/Review.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Review = sequelize.define('Review', {
  note: {
    type: DataTypes.INTEGER,
    validate: { min: 1, max: 5 }
  },
  commentaire: DataTypes.TEXT
});

module.exports = Review;