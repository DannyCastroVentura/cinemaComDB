const Sequelize = require("sequelize");
const sequelize = require("./../database");

const Atores = sequelize.define('atores', {
    nome: {
      type: Sequelize.STRING,
      allowNull: false
    },
    nIdentidade: {
      type: Sequelize.STRING,
      primaryKey:true
    },
    segurancaSocial: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    nacionalidade: {
      type: Sequelize.STRING,
      allowNull: false
    },
    dataNasc: {
      type: Sequelize.DATEONLY,    
      allowNull: false
    },
    sexo: {
      type: Sequelize.STRING,
      allowNull: false
    },
    telefone: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    email: {
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

module.exports = Atores;