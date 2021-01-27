
const Cinema = require("./../models/cinemas");

module.exports = (app) => {
    
    app.post("/addCinema", (req, res) => {
        const nome = req.body.nome;
        const Localidade = req.body.Localidade;
        const imagem = req.body.imagem;
            
        Cinema.findOne({
            where:{
                nomeCinema: nome,
                localidade: Localidade
            }
        }).then((verificacao) => {
            if(verificacao == null){
                Cinema.create({
                    nomeCinema: nome,
                    localidade: Localidade,
                    image: imagem
                });
                res.status(200).send(true);
            }else{
                res.status(409).send("Cinema já está na base de dados!");
            }
        });     
    });
}