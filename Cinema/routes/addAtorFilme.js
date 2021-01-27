


const AtorFilme = require("./../models/atorFilme");
module.exports = (app) => {
    
    app.post("/addAtorFilme", (req, res) => {
        const ator = req.body.ator;
        const filme = req.body.filme;
        const personagem = req.body.personagem;
        AtorFilme.findOne({
            where:{
                ator: ator,
                idFilme: filme
            }
        }).then((verificacao) => {
            if(verificacao == null){
                AtorFilme.create({
                    ator: ator,
                    idFilme: filme,
                    nomePersonagem: personagem
                });
                res.status(200).send(true);
            }else{
                res.status(409).send("Filme já tem esse ator na base de dados!");
            }
        });
        
    });
}