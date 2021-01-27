const Realizador = require('./../models/realizadores');

module.exports = (app) => {    
    app.post("/alterarRealizador", (req, res) => {
        const realizadorAAlterar = req.body.realizadorAAlterar;
        const nome = req.body.nome;
        const telefone = req.body.telefone;
        const imagem = req.body.imagem;
        console.log(realizadorAAlterar);
        console.log(nome);
        console.log(telefone);
        console.log(imagem);
        Realizador.update({
            nome: nome,
            telefone: telefone,
            image: imagem
        }, 
        {
            where:
            {
                nome: realizadorAAlterar
            }
        }
        
        );
        res.status(200).send(true);
    });
}