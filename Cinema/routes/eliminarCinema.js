const Cinema = require('./../models/cinemas');

const FilmeCinema = require("./../models/filmeCinema");
module.exports = (app) => {
    
    app.post("/eliminarCinema", (req, res) => {
        const nome = req.body.nome;
        const localidade = req.body.localidade;
        
        Cinema.destroy({
            where: {nomeCinema: nome, localidade: localidade}
        });
        FilmeCinema.destroy(
        {
            where:{
                nomeCinema: nome,
                localidade: localidade
            }
        })
        res.status(200).send(true);
    });
}