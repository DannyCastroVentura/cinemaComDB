

const FilmeGenero = require("./../models/filmeGenero");

module.exports = (app) => {
    
    app.post("/eliminarFilmeGenero", (req, res) => {
        const filme = req.body.filme;
        const genero = req.body.genero;
        
        FilmeGenero.destroy({
            where: {
                idFilme: filme,
                idGenero: genero
            }
        });
        
        res.status(200).send(true);
    });
}