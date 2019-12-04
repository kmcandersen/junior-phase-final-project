const Sequelize = require("sequelize");
const db = require("./database");

const Student = db.define("student", {
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
    defaultValue: "https://randomuser.me/api/portraits/med/women/76.jpg"
  },
  gpa: {
    type: Sequelize.DOUBLE,
    validate: {
      min: 0.0,
      max: 4.0
    }
  }
});

module.exports = Student;
