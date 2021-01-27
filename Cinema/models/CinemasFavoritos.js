const Sequelize = require("sequelize");
const sequelize = require("./../database");

const User = require("./../models/users");
const Cinemas = require("./../models/cinemas");

const CinemasFavoritos = sequelize.define('cinemasFavoritos', {
    
  }, 
  {
    freezeTableName:true
  });
  
CinemasFavoritos.belongsTo(User, {foreignKey: 'idUser', constraints: false, primaryKey: true, onUpdate: 'cascade', onDelete: 'cascade'});
CinemasFavoritos.belongsTo(Cinemas, {foreignKey: 'nomeCinema', constraints: false, primaryKey: true, onUpdate: 'cascade', onDelete: 'cascade'});
CinemasFavoritos.belongsTo(Cinemas, {foreignKey: 'localidade', constraints: false, primaryKey: true, onUpdate: 'cascade', onDelete: 'cascade'});
module.exports = CinemasFavoritos;