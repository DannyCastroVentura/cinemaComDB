const Sequelize = require("sequelize");
const sequelize = require("./../database");

const Generos = sequelize.define('generos', {
    idGenero: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    genero: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    }
  }, 
  {
    freezeTableName:true
  });

module.exports = Generos;