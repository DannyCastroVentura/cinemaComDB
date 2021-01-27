
const AtorPapeis = require("./../models/atorPapeis");

module.exports = (app) => {
    
    app.post("/eliminarAtorPapeis", (req, res) => {
        const ator = req.body.ator;
        const papel = req.body.papel;
        
        AtorPapeis.destroy({
            where: {
                ator: ator,
                tiposDePapel: papel
            }
        });
        
        res.status(200).send(true);
    });
}