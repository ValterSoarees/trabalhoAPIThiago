const Sequelize = require('sequelize');

const sequelize = new Sequelize('comentabook', 'aluno', 'aluno', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;