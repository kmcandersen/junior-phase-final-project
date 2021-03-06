const Sequelize = require('sequelize');
const db = require('./database');
const Campus = require('./campus');

const Student = db.define(
  'student',
  {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true
      }
    },
    imageUrl: {
      type: Sequelize.STRING,
      defaultValue: 'https://robohash.org/default?set=set2'
    },
    gpa: {
      type: Sequelize.FLOAT,
      validate: {
        min: 0.0,
        max: 4.0
      }
    }
  },
  {
    defaultScope: {
      include: [{ model: Campus }]
    }
  }
);

module.exports = Student;
