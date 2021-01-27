const Sequelize = require("sequelize");
const sequelize = require("./../database");

const Cinemas = sequelize.define('cinemas', {
    nomeCinema: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true
    },
    localidade: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true
    },
    image: {
        type: Sequelize.STRING(500),
        allowNull: false
    }
  }, 
  {
    freezeTableName:true
  });

module.exports = Cinemas;