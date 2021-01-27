const Ator = require('./../models/atores');

module.exports = (app) => {
    
    app.post("/eliminarAtor", (req, res) => {
        const nIdentidade = req.body.nIdentidade;
        
        Ator.destroy({
            where: {nIdentidade: nIdentidade}
        });
        
        res.status(200).send(true);
    });
}