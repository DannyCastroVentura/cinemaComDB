
const Realizador = require("./../models/realizadores");

module.exports = (app) => {
    
    app.post("/addRealizador", (req, res) => {
        const nome = req.body.nome;
        const telefone = req.body.telefone;
        const imagem = req.body.imagem;
        Realizador.findOne({
            where:{
                nome: nome
            }
        }).then((verificacao) => {
            if(verificacao == null){
                console.log("\n\nNão existe\n\n");
                Realizador.create({
                    nome: nome,
                    telefone: telefone,
                    image: imagem
                });
                res.status(200).send(true);
            }else{
                console.log("\n\nexiste\n\n");
                res.status(409).send("Realizador já está na base de dados!");
            }
        });    
    });
}