const Realizador = require('./../models/realizadores');

module.exports = (app) => {
    
    app.post("/eliminarRealizador", (req, res) => {
        const nome = req.body.nome;
        console.log( "Nome: " + nome);
        Realizador.destroy({
            where: {nome: nome}
        });
        
        res.status(200).send(true);
    });
}