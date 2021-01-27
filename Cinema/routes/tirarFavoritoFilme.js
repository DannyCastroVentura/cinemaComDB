
const Filmes = require("./../models/filmes");

const User = require("./../models/users");

const FilmesFavoritos = require("./../models/filmesFavoritos");
FilmesFavoritos.belongsTo(User, {foreignKey: 'idUser', constraints: false, primaryKey: true});
FilmesFavoritos.belongsTo(Filmes, {foreignKey: 'idFilme', constraints: false, primaryKey: true});



module.exports = (app) => {
    
    app.post("/tirarFavoritoFilme", (req, res) => {
        const username = req.body.username;
        const idFilme = req.body.idFilme;
                
        FilmesFavoritos.destroy({
            where: {
                idUser: username,
                idFilme: idFilme
            }
            
        });
        res.status(200).send(true);
    });
}