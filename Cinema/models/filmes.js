const Sequelize = require("sequelize");
const sequelize = require("./../database");

const Estudios = require("./estudios");
const Realizadores = require("./realizadores");

const Filmes = sequelize.define('filmes', {
    idFilme: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tituloOriginal: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },
    tituloPortugues: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },
    sinopse:{
      type: Sequelize.STRING(500),
      allowNull: false
    },
    duracaoDasFilmagens: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    anoLancamento: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    custoTotal: {
      type: Sequelize.INTEGER,
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

  Filmes.belongsTo(Estudios, {foreignKey: 'nomeEstudio', constraints: false, onUpdate: 'cascade', onDelete: 'set null'});
  Filmes.belongsTo(Realizadores, {foreignKey: 'realizador', constraints: false, onUpdate: 'cascade', onDelete: 'set null'});
module.exports = Filmes;