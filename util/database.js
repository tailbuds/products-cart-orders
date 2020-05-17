const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_complete', 'node', 'Node,123', {
  dialect: 'mysql',
  host: 'raynemani.ml',
});

module.exports = sequelize;
