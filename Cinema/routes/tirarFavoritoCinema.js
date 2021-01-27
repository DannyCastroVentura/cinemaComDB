

const Cinema = require("./../models/cinemas");

const User = require("./../models/users");

const CinemasFavoritos = require("./../models/cinemasFavoritos");
CinemasFavoritos.belongsTo(User, {foreignKey: 'idUser', constraints: false, primaryKey: true});
CinemasFavoritos.belongsTo(Cinema, {foreignKey: 'nomeCinema', constraints: false, primaryKey: true});
CinemasFavoritos.belongsTo(Cinema, {foreignKey: 'localidade', constraints: false, primaryKey: true});


module.exports = (app) => {
    
    app.post("/tirarFavoritoCinema", (req, res) => {
        const username = req.body.username;
        const nomeCinema = req.body.nomeCinema;
        const localidade = req.body.localidade;
                
        CinemasFavoritos.destroy({
            where:{
                idUser: username,
                nomeCinema: nomeCinema,
                localidade: localidade
            }
        });
        res.status(200).send(true);
    });
}