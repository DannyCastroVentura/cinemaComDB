
const Estudio = require("./../models/estudios");

const User = require("./../models/users");

const EstudiosFavoritos = require("./../models/estudiosFavoritos");
EstudiosFavoritos.belongsTo(User, {foreignKey: 'idUser', constraints: false, primaryKey: true});
EstudiosFavoritos.belongsTo(Estudio, {foreignKey: 'idEstudio', constraints: false, primaryKey: true});


module.exports = (app) => {
    
    app.post("/porFavoritoEstudio", (req, res) => {
        const username = req.body.username;
        const idEstudio = req.body.idEstudio;
                
        EstudiosFavoritos.create({
            idUser: username,
            idEstudio: idEstudio
        });
        res.status(200).send(true);
    });
}