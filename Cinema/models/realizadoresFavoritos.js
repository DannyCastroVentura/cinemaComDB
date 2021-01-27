const Sequelize = require("sequelize");
const sequelize = require("./../database");

const User = require("./../models/users");
const Realizadores = require("./../models/realizadores");

const RealizadoresFavoritos = sequelize.define('realizadoresFavoritos', {
    
  }, 
  {
    freezeTableName:true
  });
  
RealizadoresFavoritos.belongsTo(User, {foreignKey: 'idUser', constraints: false, primaryKey: true, onUpdate: 'cascade', onDelete: 'cascade'});
RealizadoresFavoritos.belongsTo(Realizadores), {foreignKey: 'idRealizador', constraints: false, primaryKey: true, onUpdate: 'cascade', onDelete: 'cascade'};
module.exports = RealizadoresFavoritos;