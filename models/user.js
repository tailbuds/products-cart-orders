const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING(135),
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
});

module.exports = User;
