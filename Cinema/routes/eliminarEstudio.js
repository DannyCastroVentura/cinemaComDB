const Estudio = require('./../models/estudios');

module.exports = (app) => {
    
    app.post("/eliminarEstudio", (req, res) => {
        const nome = req.body.nome;
        
        Estudio.destroy({
            where: {nome: nome}
        });
        
        res.status(200).send(true);
    });
}