const Sequelize = require("sequelize");
const sequelize = require("./../database");

const Filmes = require("./filmes");
const Atores = require("./atores");


const AtorFilme = sequelize.define('atorFilme', {
    nomePersonagem: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, 
  {
    freezeTableName:true
  });
  AtorFilme.belongsTo(Filmes, {foreignKey: 'idFilme', constraints: false, primaryKey: true, onUpdate: 'cascade', onDelete: 'cascade'});
  AtorFilme.belongsTo(Atores, {foreignKey: 'ator', constraints: false, primaryKey: true, onUpdate: 'cascade', onDelete: 'cascade'});

  AtorFilme.removeAttribute('id');
module.exports = AtorFilme;