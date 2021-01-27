


const FilmeGenero = require("./../models/filmeGenero");
module.exports = (app) => {
    
    app.post("/addFilmeGenero", (req, res) => {
        const filme = req.body.filme;
        const genero = req.body.genero;
        FilmeGenero.findOne({
            where:{
                idFilme: filme,
                idGenero: genero
            }
        }).then((verificacao) => {
            if(verificacao == null){
                FilmeGenero.create({
                    idFilme: filme,
                    idGenero: genero
                });
                res.status(200).send(true);
            }else{
                res.status(409).send("Filme já tem esse genero na base de dados!");
            }
        });
        
    });
}