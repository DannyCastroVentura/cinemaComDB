
const { QueryTypes } = require('sequelize');
const sequelize = require('./../database');

module.exports = (app) => {
    app.get("/", (req, res) => {
        console.log("Entrou na pagina raiz");
        sequelize.query("SELECT nome as nomeGeral, nome as chavePrimaria, image, createdAt, 1 as categoria FROM realizadores UNION SELECT nome as nomeGeral, nome as chavePrimaria, image, createdAt, 2 as categoria FROM estudios UNION SELECT nomeCinema as nomeGeral, concat(nomeCinema, ' ', localidade) as chavePrimaria, image, createdAt, 3 as categoria FROM cinemas UNION SELECT nome as nomeGeral, nIdentidade as chavePrimaria, image, createdAt, 4 as categoria FROM atores UNION SELECT tituloOriginal as nomeGeral, idFilme as chavePrimaria, image, createdAt, 5 as categoria FROM filmes order by createdAt DESC LIMIT 6;", { type: QueryTypes.SELECT }).then((itensRecentes) => {
            sequelize.query("SELECT realizadores.nome as nomeGeral, realizadores.nome as chavePrimaria, image, realizadores.updatedAt, 1 as categoria, idUser FROM realizadores left join realizadoresFavoritos on realizadores.nome = realizadoresFavoritos.realizadoreNome UNION SELECT nome as nomeGeral, nome as chavePrimaria, image, estudios.updatedAt, 2 as categoria, idUser FROM estudios left join estudiosFavoritos on estudios.nome = estudiosFavoritos.idEstudio UNION SELECT cinemas.nomeCinema as nomeGeral, concat(cinemas.nomeCinema, ' ', cinemas.localidade) as chavePrimaria, image, cinemas.updatedAt, 3 as categoria, idUser FROM cinemas left join cinemasFavoritos on cinemas.nomeCinema = cinemasFavoritos.nomeCinema and cinemas.localidade = cinemasFavoritos.localidade UNION SELECT nome as nomeGeral, atores.nIdentidade as chavePrimaria, image, atores.updatedAt, 4 as categoria, idUser FROM atores left join atoresFavoritos on atores.nIdentidade = atoresFavoritos.ator UNION SELECT tituloOriginal as nomeGeral, filmes.idFilme as chavePrimaria, image, filmes.updatedAt as updatedAt, 5 as categoria, filmesFavoritos.idUser FROM filmes left join filmesFavoritos on filmes.idFilme = filmesFavoritos.idFilme order by nomeGeral;", { type: QueryTypes.SELECT }).then((todosOsItens) => {
                sequelize.query("select filmes.idFilme as idFilme, filmes.tituloOriginal, filmes.tituloPortugues, filmes.sinopse, filmes.duracaoDasFilmagens, filmes.anoLancamento, filmes.custoTotal, filmes.image, filmes.updatedAt, filmes.nomeEstudio, filmes.realizador, generos.genero, atores.nome, filmesFavoritos.idUser from filmes left join filmeGenero on filmes.idFilme = filmeGenero.idFilme left join generos on filmeGenero.idGenero = generos.idGenero left join atorFilme on filmes.idFilme = atorFilme.idFilme left join atores on atorfilme.ator = atores.nIdentidade left join filmesFavoritos on filmes.idFilme = filmesFavoritos.idFilme order by filmes.tituloOriginal;", { type: QueryTypes.SELECT }).then((filmes) => {
                    sequelize.query("select realizadores.nome, realizadores.telefone, realizadores.image, realizadores.updatedAt, filmes.tituloOriginal, realizadoresFavoritos.idUser from realizadores left join filmes on realizadores.nome = filmes.realizador left join realizadoresFavoritos on realizadores.nome = realizadoresFavoritos.realizadoreNome order by realizadores.nome;", { type: QueryTypes.SELECT }).then((realizadores) => {
                        sequelize.query("select estudios.nome, estudios.dono, estudios.dataFund, estudios.morada, estudios.lucroAnoAnterior, estudios.image, estudios.updatedAt, filmes.tituloOriginal, estudiosFavoritos.idUser from estudios left join filmes on estudios.nome = filmes.nomeEstudio left join estudiosFavoritos on estudios.nome = estudiosFavoritos.idEstudio order by estudios.nome;", { type: QueryTypes.SELECT }).then((estudios) => {
                            sequelize.query("select cinemas.nomeCinema, cinemas.localidade, cinemas.image, cinemas.updatedAt, filmes.tituloOriginal, cinemasFavoritos.idUser from cinemas left join filmeCinema on cinemas.nomeCinema = filmeCinema.nomeCinema and cinemas.localidade = filmeCinema.localidade left join filmes on filmeCinema.idFilme = filmes.idFilme left join cinemasFavoritos on cinemas.nomeCinema = cinemasFavoritos.nomeCinema and cinemas.localidade = cinemasFavoritos.localidade order by cinemas.nomeCinema;", { type: QueryTypes.SELECT }).then((cinemas) => {
                                sequelize.query("select atores.nome, atores.nIdentidade, atores.segurancaSocial, atores.nacionalidade, DATE_FORMAT(atores.dataNasc, '%Y-%m-%d') as dataNasc , atores.sexo, atores.telefone, atores.email, atores.image, atores.updatedAt, conjuntodetiposdepapeis.tiposDePapel, filmes.tituloOriginal, atoresFavoritos.idUser from atores left join atorPapeis on atores.nIdentidade = atorPapeis.ator left join conjuntodetiposdepapeis on atorPapeis.tiposDePapel = conjuntodetiposdepapeis.idTiposDePapel left join atorFilme on atores.nIdentidade = atorFilme.ator left join filmes on atorFilme.idFilme = filmes.idFilme left join atoresFavoritos on atores.nIdentidade = atoresFavoritos.ator order by atores.nome;", { type: QueryTypes.SELECT }).then((atores) => {
                                    sequelize.query("select count(idFilme) as numero from filmes", { type: QueryTypes.SELECT }).then((contFilmes) => {
                                        sequelize.query("select count(nome) as numero from atores", { type: QueryTypes.SELECT }).then((contAtores) => {
                                            sequelize.query("select count(nome) as numero from realizadores", { type: QueryTypes.SELECT }).then((contRealizadores) => {
                                                sequelize.query("select count(nomeCinema) as numero from cinemas", { type: QueryTypes.SELECT }).then((contCinemas) => {
                                                    sequelize.query("select count(nome) as numero from estudios", { type: QueryTypes.SELECT }).then((contEstudios) => {
                                                        res.render('home.handlebars', {itensRecentes: itensRecentes, todosOsItens: todosOsItens, filmes: filmes, realizadores: realizadores, estudios: estudios, cinemas: cinemas, atores: atores, contFilmes: contFilmes, contAtores: contAtores, contRealizadores: contRealizadores, contCinemas: contCinemas, contEstudios: contEstudios});
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });

}