
const AtorFilme = require("./../models/atorFilme");

module.exports = (app) => {
    
    app.post("/eliminarAtorFilme", (req, res) => {
        const ator = req.body.ator;
        const filme = req.body.filme;
        
        AtorFilme.destroy({
            where: {
                ator: ator,
                idFilme: filme
            }
        });
        
        res.status(200).send(true);
    });
}