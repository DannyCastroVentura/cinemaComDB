
const Genero = require("./../models/generos");

module.exports = (app) => {
    
    app.post("/eliminarGenero", (req, res) => {
        const idGenero = req.body.idGenero;
        
        Genero.destroy({
            where: {idGenero: idGenero}
        });
        
        res.status(200).send(true);
    });
}