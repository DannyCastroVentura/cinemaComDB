
const Filme = require('./../models/filmes');
const Estudios = require("./../models/estudios");
const Realizadores = require("./../models/realizadores");
Filme.belongsTo(Estudios, {foreignKey: 'nomeEstudio', constraints: false});
Filme.belongsTo(Realizadores, {foreignKey: 'realizador', constraints: false});

module.exports = (app) => {
    
    app.post("/eliminarFilme", (req, res) => {
        const idFilme = req.body.idFilme;
        
        Filme.destroy({
            where: {idFilme: idFilme}
        });
        
        res.status(200).send(true);
    });
}