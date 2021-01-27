

const FilmeCinema = require("./../models/filmeCinema");
module.exports = (app) => {
    
    app.post("/addFilmeCinema", (req, res) => {
        const filme = req.body.filme;
        const nomeCinema = req.body.nomeCinema;
        const localidade = req.body.localidade;
        FilmeCinema.findOne({
            where:{
                idFilme: filme,
                nomeCinema: nomeCinema,
                localidade: localidade
            }
        }).then((verificacao) => {
            if(verificacao == null){
                FilmeCinema.create({
                    idFilme: filme,
                    nomeCinema: nomeCinema,
                    localidade: localidade
                });
                res.status(200).send(true);
            }else{
                res.status(409).send("Cinema já tem esse filme na base de dados!");
            }
        });
        
    });
}