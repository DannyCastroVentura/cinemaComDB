
const Generos = require("./../models/generos");

module.exports = (app) => {
    
    app.post("/addGenero", (req, res) => {
        const genero = req.body.genero;
        Generos.findOne({
            where:{
                genero: genero
            }
        }).then((verificacao) => {
            if(verificacao == null){
                Generos.create({
                    genero: genero
                });
                res.status(200).send(true);
            }else{
                res.status(409).send("Genero já está na base de dados!");
            }
        });     
    });
}