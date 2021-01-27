
const Ator = require("./../models/atores");

const User = require("./../models/users");

const AtoresFavoritos = require("./../models/atoresFavoritos");
AtoresFavoritos.belongsTo(User, {foreignKey: 'idUser', constraints: false, primaryKey: true});
AtoresFavoritos.belongsTo(Ator, {foreignKey: 'ator', constraints: false, primaryKey: true});



module.exports = (app) => {
    
    app.post("/tirarFavoritoAtor", (req, res) => {
        const username = req.body.username;
        const nIdentidade = req.body.nIdentidade;
                
        AtoresFavoritos.destroy({
            where:{
                idUser: username,
                ator: nIdentidade
            }
            
        });
        res.status(200).send(true);
    });
}