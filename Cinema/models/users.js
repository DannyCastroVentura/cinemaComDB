const Sequelize = require("sequelize");
const sequelize = require("./../database");

const User = sequelize.define('users', {
    username: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email:
    {
      type: Sequelize.STRING,
      allowNull: false
    },
    admin:
    {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      allowNull: true
    },
    resetPasswordToken: Sequelize.STRING,
    resetPasswordExpires: Sequelize.DATE,
  }, 
  {
    freezeTableName:true
  });

module.exports = User;