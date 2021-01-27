
const Filme = require('./../models/filmes');
const Estudios = require("./../models/estudios");
const Realizadores = require("./../models/realizadores");
Filme.belongsTo(Estudios, {foreignKey: 'nomeEstudio', constraints: false});
Filme.belongsTo(Realizadores, {foreignKey: 'realizador', constraints: false});
const passport = require('passport');

module.exports = (app) => {
    
    app.post("/addFilme", (req, res) => {
        const nomeOriginal = req.body.nomeOriginal;
        const nomePortugues = req.body.nomePortugues;
        const sinopse = req.body.sinopse;
        const realizador = req.body.realizador;
        const estudio = req.body.estudio;
        const duracaoDasFilmagens = req.body.duracaoDasFilmagens;
        const anoLancamento = req.body.anoLancamento;
        const custoTotal = req.body.custoTotal;
        const imagem = req.body.imagem;
                
        Filme.create({
            tituloOriginal: nomeOriginal,
            tituloPortugues: nomePortugues,
            sinopse: sinopse,
            duracaoDasFilmagens: duracaoDasFilmagens,
            anoLancamento: anoLancamento,
            custoTotal: custoTotal,
            nomeEstudio: estudio,
            realizador: realizador,
            image: imagem
        });
        res.status(200).send(true);
    });
}