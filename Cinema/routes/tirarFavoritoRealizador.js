
const Realizador = require("./../models/realizadores");

const User = require("./../models/users");

const RealizadoresFavoritos = require("./../models/realizadoresFavoritos");
RealizadoresFavoritos.belongsTo(User, {foreignKey: 'idUser', constraints: false, primaryKey: true});
RealizadoresFavoritos.belongsTo(Realizador), {foreignKey: 'idRealizador', constraints: false, primaryKey: true};



module.exports = (app) => {
    
    app.post("/tirarFavoritoRealizador", (req, res) => {
        const username = req.body.username;
        const nome = req.body.nome;
                
        RealizadoresFavoritos.destroy({
            where:{
                idUser: username,
                realizadoreNome: nome
            }
        });
        res.status(200).send(true);
    });
}