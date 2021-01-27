const Sequelize = require("sequelize");
const sequelize = require("./../database");

const User = require("./../models/users");
const Estudios = require("./../models/estudios");

const EstudiosFavoritos = sequelize.define('estudiosFavoritos', {
    
  }, 
  {
    freezeTableName:true
  });
  
EstudiosFavoritos.belongsTo(User, {foreignKey: 'idUser', constraints: false, primaryKey: true, onUpdate: 'cascade', onDelete: 'cascade'});
EstudiosFavoritos.belongsTo(Estudios, {foreignKey: 'idEstudio', constraints: false, primaryKey: true, onUpdate: 'cascade', onDelete: 'cascade'});
module.exports = EstudiosFavoritos;