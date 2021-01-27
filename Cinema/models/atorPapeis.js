
const ConjuntoDeTiposDePapeis = require("./conjuntodeTiposDePapeis");
const Atores = require("./atores");

const sequelize = require("./../database");

const AtorPapeis = sequelize.define('atorPapeis', {
    
  }, 
  {
    freezeTableName:true
  });

  AtorPapeis.belongsTo(Atores, {foreignKey: 'ator', constraints: false, primaryKey: true, onUpdate: 'cascade', onDelete: 'cascade'});
  AtorPapeis.belongsTo(ConjuntoDeTiposDePapeis, {foreignKey: 'tiposDePapel', constraints: false, primaryKey: true, onUpdate: 'cascade', onDelete: 'cascade'});
  AtorPapeis.removeAttribute('id');
module.exports = AtorPapeis;