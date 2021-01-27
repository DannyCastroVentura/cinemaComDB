const Ator = require('./../models/atores');

module.exports = (app) => {
    
    app.post("/alterarAtor", (req, res) => {
        const altorAAlterar = req.body.atorAAlterar;
        const nome = req.body.nome;
        const nIdentidade = req.body.nIdentidade;
        const segurancaSocial = req.body.segurancaSocial;
        const nacionalidade = req.body.nacionalidade;
        const dataNasc = req.body.dataNasc;
        const sexo = req.body.sexo;
        const telefone = req.body.telefone;
        const email = req.body.email;
        const imagem = req.body.imagem;
                
        Ator.update({
            nome: nome,
            nIdentidade: nIdentidade,
            segurancaSocial: segurancaSocial,
            nacionalidade: nacionalidade,
            dataNasc: dataNasc,
            sexo: sexo,
            telefone: telefone,
            email: email,
            image: imagem
        }, 
        {
            where:
            {
                nIdentidade: altorAAlterar
            }
        }
        
        );
        res.status(200).send(true);
    });
}