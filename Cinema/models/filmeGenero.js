const Sequelize = require("sequelize");
const sequelize = require("./../database");

const Filmes = require("./filmes");

const Generos = require("./generos");


const FilmeGenero = sequelize.define('filmeGenero', {
    
  }, 
  {
    freezeTableName:true
  });
  
FilmeGenero.belongsTo(Filmes, {foreignKey: 'idFilme', constraints: false, primaryKey: true, onUpdate: 'cascade', onDelete: 'cascade'});
FilmeGenero.belongsTo(Generos, {foreignKey: 'idGenero', constraints: false, primaryKey: true, onUpdate: 'cascade', onDelete: 'cascade'});
FilmeGenero.removeAttribute('id');
module.exports = FilmeGenero;