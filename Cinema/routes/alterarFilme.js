
const Filme = require('./../models/filmes');

module.exports = (app) => {
    
    app.post("/alterarFilme", (req, res) => {
        console.log("chegou aqui");
        const filmeAAlterar = req.body.filmeAAlterar;
        const nomeOriginal = req.body.nomeOriginal;
        const nomePortugues = req.body.nomePortugues;
        const sinopse = req.body.sinopse;
        const realizador = req.body.realizador;
        const estudio = req.body.estudio;
        const duracaoDasFilmagens = req.body.duracaoDasFilmagens;
        const anoLancamento = req.body.anoLancamento;
        const custoTotal = req.body.custoTotal;
        const imagem = req.body.imagem;
                
        Filme.update({
            tituloOriginal: nomeOriginal,
            tituloPortugues: nomePortugues,
            sinopse: sinopse,
            duracaoDasFilmagens: duracaoDasFilmagens,
            anoLancamento: anoLancamento,
            custoTotal: custoTotal,
            nomeEstudio: estudio,
            realizador: realizador,
            image: imagem
        }, 
        {
            where:
            {
                idFilme: filmeAAlterar
            }
        }
        
        );
        res.status(200).send(true);
    });
}