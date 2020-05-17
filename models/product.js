const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING(135),
    allowNull: false,
    unique: true,
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Product;
