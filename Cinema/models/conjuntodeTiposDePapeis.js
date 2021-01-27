const Sequelize = require("sequelize");
const sequelize = require("./../database");

const conjuntoDeTiposDePapeis = sequelize.define('conjuntoDeTiposDePapeis', {
    idTiposDePapel: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tiposDePapel: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    }
    
  }, 
  {
    freezeTableName:true
  }
);

module.exports = conjuntoDeTiposDePapeis;
