const Sequelize = require("sequelize");
const sequelize = require("./../database");

const User = require("./../models/users");
const Atores = require("./../models/atores");


const AtoresFavoritos = sequelize.define('atoresFavoritos', {
    
  }, 
  {
    freezeTableName:true
  });
  
AtoresFavoritos.belongsTo(User, {foreignKey: 'idUser', constraints: false, primaryKey: true, onUpdate: 'cascade', onDelete: 'cascade'});
AtoresFavoritos.belongsTo(Atores, {foreignKey: 'ator', constraints: false, primaryKey: true, onUpdate: 'cascade', onDelete: 'cascade'});
module.exports = AtoresFavoritos;