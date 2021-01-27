


const FilmeCinema = require("./../models/filmeCinema");

module.exports = (app) => {
    
    app.post("/eliminarFilmeCinema", (req, res) => {
        const filme = req.body.filme;
        const nomeCinema = req.body.nomeCinema;
        const localidade = req.body.localidade;
        
        FilmeCinema.destroy({
            where: {
                idFilme: filme,
                nomeCinema: nomeCinema,
                localidade: localidade
            }
        });
        
        res.status(200).send(true);
    });
}