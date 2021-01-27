
const { QueryTypes } = require('sequelize');
const sequelize = require('./../database');

module.exports = (app) => {
    app.get("/admin", (req, res) => {
        console.log("Entrou na pagina raiz");
        sequelize.query("SELECT realizadores.nome as nomeGeral, realizadores.nome as chavePrimaria, image, realizadores.updatedAt, 1 as categoria FROM realizadores UNION SELECT nome as nomeGeral, nome as chavePrimaria, image, estudios.updatedAt, 2 as categoria FROM estudios UNION SELECT cinemas.nomeCinema as nomeGeral, concat(cinemas.nomeCinema, ' ', cinemas.localidade) as chavePrimaria, image, cinemas.updatedAt, 3 as categoria FROM cinemas UNION SELECT nome as nomeGeral, atores.nIdentidade as chavePrimaria, image, atores.updatedAt, 4 as categoria FROM atores UNION SELECT tituloOriginal as nomeGeral, filmes.idFilme as chavePrimaria, image, filmes.updatedAt as updatedAt, 5 as categoria FROM filmes order by nomeGeral;", { type: QueryTypes.SELECT }).then((todosOsItens) => {
            sequelize.query("select filmes.idFilme as idFilme, filmes.tituloOriginal, filmes.tituloPortugues, filmes.sinopse, filmes.duracaoDasFilmagens, filmes.anoLancamento, filmes.custoTotal, filmes.image, filmes.updatedAt, filmes.nomeEstudio, filmes.realizador, generos.genero, atores.nome from filmes left join filmeGenero on filmes.idFilme = filmeGenero.idFilme left join generos on filmeGenero.idGenero = generos.idGenero left join atorFilme on filmes.idFilme = atorFilme.idFilme left join atores on atorfilme.ator = atores.nIdentidade order by filmes.tituloOriginal;", { type: QueryTypes.SELECT }).then((filmes) => {
                sequelize.query("select realizadores.nome, realizadores.telefone, realizadores.image, realizadores.updatedAt, filmes.tituloOriginal from realizadores left join filmes on realizadores.nome = filmes.realizador order by realizadores.nome;", { type: QueryTypes.SELECT }).then((realizadores) => {
                    sequelize.query("select estudios.nome, estudios.dono, estudios.dataFund, estudios.morada, estudios.lucroAnoAnterior, estudios.image, estudios.updatedAt, filmes.tituloOriginal from estudios left join filmes on estudios.nome = filmes.nomeEstudio order by estudios.nome;", { type: QueryTypes.SELECT }).then((estudios) => {
                        sequelize.query("select cinemas.nomeCinema, cinemas.localidade, cinemas.image, cinemas.updatedAt, filmes.tituloOriginal from cinemas left join filmeCinema on cinemas.nomeCinema = filmeCinema.nomeCinema and cinemas.localidade = filmeCinema.localidade left join filmes on filmeCinema.idFilme = filmes.idFilme order by cinemas.nomeCinema;", { type: QueryTypes.SELECT }).then((cinemas) => {
                            sequelize.query("select atores.nome, atores.nIdentidade, atores.segurancaSocial, atores.nacionalidade, DATE_FORMAT(atores.dataNasc, '%Y-%m-%d') as dataNasc , atores.sexo, atores.telefone, atores.email, atores.image, atores.updatedAt, conjuntodetiposdepapeis.tiposDePapel, filmes.tituloOriginal from atores left join atorPapeis on atores.nIdentidade = atorPapeis.ator left join conjuntodetiposdepapeis on atorPapeis.tiposDePapel = conjuntodetiposdepapeis.idTiposDePapel left join atorFilme on atores.nIdentidade = atorFilme.ator left join filmes on atorFilme.idFilme = filmes.idFilme order by atores.nome;", { type: QueryTypes.SELECT }).then((atores) => {
                                sequelize.query("select * from users order by createdAt;", { type: QueryTypes.SELECT }).then((users) => {
                                    sequelize.query("select * from conjuntodetiposdepapeis order by createdAt;", { type: QueryTypes.SELECT }).then((tiposDePapel) => {
                                        sequelize.query("select * from generos order by createdAt;", { type: QueryTypes.SELECT }).then((generos) => {
                                            sequelize.query("select atorPapeis.tiposDePapel, atorPapeis.ator, atores.nome, conjuntodetiposdepapeis.tiposDePapel as papel from atorPapeis inner join atores on atorPapeis.ator = atores.nIdentidade inner join conjuntodetiposdepapeis on atorPapeis.tiposDePapel = conjuntodetiposdepapeis.idTiposDePapel order by atorPapeis.createdAt;", { type: QueryTypes.SELECT }).then((atorPapeis) => {
                                                sequelize.query("select atorFilme.nomePersonagem, atorFilme.idFilme, atorFilme.ator, filmes.tituloOriginal, atores.nome from atorFilme inner join filmes on atorFilme.idFilme = filmes.idFilme inner join atores on atorFilme.ator = atores.nIdentidade order by atorFilme.createdAt;", { type: QueryTypes.SELECT }).then((atorFilme) => {
                                                    sequelize.query("select filmeGenero.idFilme, filmeGenero.idGenero, filmes.tituloOriginal, generos.genero from filmeGenero inner join filmes on filmeGenero.idFilme = filmes.idFilme inner join generos on filmeGenero.idGenero = generos.idGenero order by filmeGenero.createdAt;", { type: QueryTypes.SELECT }).then((filmeGenero) => {
                                                        sequelize.query("select filmeCinema.idFilme, filmeCinema.nomeCinema, filmeCinema.localidade, filmes.tituloOriginal from filmeCinema inner join filmes on filmes.idFilme = filmeCinema.idFilme order by filmeCinema.createdAt;", { type: QueryTypes.SELECT }).then((filmeCinema) => {
                                                            res.render('admin.handlebars', { todosOsItens: todosOsItens, filmes: filmes, realizadores: realizadores, estudios: estudios, cinemas: cinemas, atores: atores, users: users, tiposDePapel: tiposDePapel, generos: generos, atorPapeis: atorPapeis, atorFilme: atorFilme, filmeGenero: filmeGenero, filmeCinema: filmeCinema });
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
    });
}