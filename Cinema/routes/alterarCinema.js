const Cinema = require('./../models/cinemas');

const FilmeCinema = require("./../models/filmeCinema");

module.exports = (app) => {    
    app.post("/alterarCinema", (req, res) => {
        const nomeCinemaAAlterar = req.body.nomeCinemaAAlterar;
        const localidadeCinemaAAlterar = req.body.localidadeCinemaAAlterar;
        const nome = req.body.nomeCinema;
        const localidade = req.body.localidade;
        const imagem = req.body.imagem;
        Cinema.update({
            nomeCinema: nome,
            localidade: localidade,
            image: imagem
        }, 
        {
            where:
            {
                nomeCinema: nomeCinemaAAlterar, localidade: localidadeCinemaAAlterar
            }
        }
        
        );
        FilmeCinema.update({
            nomeCinema: nome,
            localidade: localidade
        },
        {
            where:{
                nomeCinema: nomeCinemaAAlterar,
                localidade: localidadeCinemaAAlterar
            }
        })
        res.status(200).send(true);
    });
}