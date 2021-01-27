const Sequelize = require("sequelize");
const sequelize = require("./../database");

const User = require("./users");

const Filmes = require("./filmes");

const FilmesFavoritos = sequelize.define('filmesFavoritos', {
    
  }, 
  {
    freezeTableName:true
  });

  FilmesFavoritos.belongsTo(User, {foreignKey: 'idUser', constraints: false, primaryKey: true, onUpdate: 'cascade', onDelete: 'cascade'});
  FilmesFavoritos.belongsTo(Filmes, {foreignKey: 'idFilme', constraints: false, primaryKey: true, onUpdate: 'cascade', onDelete: 'cascade'});
  FilmesFavoritos.removeAttribute('id');
module.exports = FilmesFavoritos;