const Sequelize = require("sequelize");
const sequelize = require("./../database");

const Realizadores = sequelize.define('realizadores', {
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true
    },
    telefone: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    image: {
        type: Sequelize.STRING(500),
        allowNull: false
    }
  }, 
  {
    freezeTableName:true
  });

module.exports = Realizadores;