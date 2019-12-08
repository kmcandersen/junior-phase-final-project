const Sequelize = require('sequelize');
const db = require('./database');

const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'http://kristenandersen.online/planets/galaxy.jpg'
  }
});

module.exports = Campus;
