const Sequelize = require("sequelize");
const sequelize = require("./../database");

const Estudios = sequelize.define('estudios', {
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true
    },
    dono: {
      type: Sequelize.STRING,
      allowNull: false
    },
    dataFund: {
      type: Sequelize.STRING,
      allowNull: false
    },
    morada: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lucroAnoAnterior: {
      type: Sequelize.BIGINT,
      allowNull: false
    },
    image: {
        type: Sequelize.STRING(500),
        allowNull: false
    }
  }, 
  {
    freezeTableName:true
  });

module.exports = Estudios;