
const Estudio = require("./../models/estudios");

module.exports = (app) => {
    
    app.post("/addEstudio", (req, res) => {
        console.log("chegou aqui");
        const nome = req.body.nome;
        const dono = req.body.dono;
        const endereco = req.body.endereco;
        const dtFundacao = req.body.dtFundacao;
        const lucro = req.body.lucro;
        const imagem = req.body.imagem;
        Estudio.findOne({
            where:{
                nome: nome
            }
        }).then((verificacao) => {
            if(verificacao == null){
                console.log("\n\nNão existe\n\n");
                Estudio.create({
                    nome: nome,
                    dono: dono,
                    dataFund: dtFundacao,
                    morada: endereco,
                    lucroAnoAnterior: lucro,
                    image: imagem
                });
                res.status(200).send(true);
            }else{
                console.log("\n\nexiste\n\n");
                res.status(409).send("Estudio já está na base de dados!");
            }
        });    
        
    });
}