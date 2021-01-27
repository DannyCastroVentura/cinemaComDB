const sequelize = require("./../database");
const Filmes = require("./filmes");
const Cinemas = require("./cinemas");

const FilmeCinema = sequelize.define('filmeCinema', {
    
  },
  {
    freezeTableName:true
  });
  
FilmeCinema.belongsTo(Filmes, {foreignKey: 'idFilme', constraints: false, primaryKey: true, onUpdate: 'cascade', onDelete: 'cascade'});
FilmeCinema.belongsTo(Cinemas, {foreignKey: 'nomeCinema', constraints: false, primaryKey: true, onUpdate: 'cascade', onDelete: 'cascade'});
FilmeCinema.belongsTo(Cinemas, {foreignKey: 'localidade', constraints: false, primaryKey: true, onUpdate: 'cascade', onDelete: 'cascade'});
FilmeCinema.removeAttribute('id');
module.exports = FilmeCinema;