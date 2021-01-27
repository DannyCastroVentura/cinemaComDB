const Estudio = require('./../models/estudios');

module.exports = (app) => {    
    app.post("/alterarEstudio", (req, res) => {
        const estudioAAlterar = req.body.estudioAAlterar;
        const nome = req.body.nome;
        const dono = req.body.dono;
        const dataFund = req.body.dataFund;
        const morada = req.body.morada;
        const lucroAnoAnterior = req.body.lucroAnoAnterior;
        const imagem = req.body.imagem;
        console.log(imagem);
        Estudio.update({
            nome: nome,
            dono: dono,
            dataFund: dataFund,
            morada: morada,
            lucroAnoAnterior: lucroAnoAnterior,
            image: imagem
        }, 
        {
            where:
            {
                nome: estudioAAlterar
            }
        }
        
        );
        res.status(200).send(true);
    });
}