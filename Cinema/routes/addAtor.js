
const Ator = require('./../models/atores');

module.exports = (app) => {
    
    app.post("/addAtor", (req, res) => {
        const nome = req.body.nome;
        const nIdentidade = req.body.nIdentidade;
        const segurancaSocial = req.body.segSocial;
        const nacionalidade = req.body.nacionalidade;
        const dataNasc = req.body.dataDeNascimento;
        const sexo = req.body.sexo;
        const telefone = req.body.telefone;
        const email = req.body.email;
        const imagem = req.body.imagem;
        Ator.findOne({
            where:{
                nIdentidade: nIdentidade
            }
        }).then((verificacao) => {
            if(verificacao == null){
                console.log("\n\nNão existe\n\n");
                Ator.create({
                    nome: nome,
                    nIdentidade: nIdentidade,
                    segurancaSocial: segurancaSocial,
                    nacionalidade: nacionalidade,
                    dataNasc: dataNasc,
                    sexo: sexo,
                    telefone: telefone,
                    email: email,
                    image: imagem
                });
                res.status(200).send(true);
            }else{
                console.log("\n\nexiste\n\n");
                res.status(409).send("Ator já está na base de dados!");
            }
        });    

    });
}