
const TiposDePapel = require("./../models/conjuntodeTiposDePapeis");

module.exports = (app) => {
    
    app.post("/eliminarTipoDePapel", (req, res) => {
        const idTiposDePapel = req.body.idTiposDePapel;
        
        TiposDePapel.destroy({
            where: {idTiposDePapel: idTiposDePapel}
        });
        
        res.status(200).send(true);
    });
}