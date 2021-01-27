#drop database devWeb;

#create database devWeb;

use devweb;

select * from conjuntodetiposdepapeis;
select * from realizadores;
select * from generos;
select * from cinemas;
select * from estudios;
select * from atores;
select * from atorPapeis;
select * from filmes;
select * from atorFilme;
select * from filmeGenero;
select * from filmeCinema;
select * from users;

select * from filmesFavoritos;
select * from estudiosFavoritos;
select * from atoresFavoritos;
select * from cinemasFavoritos;
select * from realizadoresFavoritos;

#atorFilme admin -----------------------------------------#atorFilme admin -----------------------------------------#atorFilme admin -----------------------------------------#atorFilme admin -----------------------------------------#atorFilme admin -----------------------------------------
select atorFilme.nomePersonagem, atorFilme.idFilme, atorFilme.ator, filmes.tituloOriginal, atores.nome from atorFilme inner join filmes on atorFilme.idFilme = filmes.idFilme inner join atores on atorFilme.ator = atores.nIdentidade order by atorFilme.createdAt;
#atorFilme admin -----------------------------------------#atorFilme admin -----------------------------------------#atorFilme admin -----------------------------------------#atorFilme admin -----------------------------------------#atorFilme admin -----------------------------------------

#filmeGenero admin -----------------------------------------#filmeGenero admin -----------------------------------------#filmeGenero admin -----------------------------------------#filmeGenero admin -----------------------------------------#filmeGenero admin -----------------------------------------
select filmeGenero.idFilme, filmeGenero.idGenero, filmes.tituloOriginal, generos.genero from filmeGenero inner join filmes on filmeGenero.idFilme = filmes.idFilme inner join generos on filmeGenero.idGenero = generos.idGenero order by filmeGenero.createdAt;
#filmeGenero admin -----------------------------------------#filmeGenero admin -----------------------------------------#filmeGenero admin -----------------------------------------#filmeGenero admin -----------------------------------------#filmeGenero admin -----------------------------------------


#filmeCinema admin -----------------------------------------#filmeCinema admin -----------------------------------------#filmeCinema admin -----------------------------------------#filmeCinema admin -----------------------------------------
select filmeCinema.idFilme, filmeCinema.nomeCinema, filmeCinema.localidade, filmes.tituloOriginal from filmeCinema inner join filmes on filmes.idFilme = filmeCinema.idFilme order by filmeCinema.createdAt;
#filmeCinema admin -----------------------------------------#filmeCinema admin -----------------------------------------#filmeCinema admin -----------------------------------------#filmeCinema admin -----------------------------------------



#atorPapeis admin -----------------------------------------#atorPapeis admin -----------------------------------------#atorPapeis admin -----------------------------------------#atorPapeis admin -----------------------------------------#atorPapeis admin -----------------------------------------#atorPapeis admin -----------------------------------------
select atorPapeis.tiposDePapel, atorPapeis.ator, atores.nome, conjuntodetiposdepapeis.tiposDePapel as papel from atorPapeis inner join atores on atorPapeis.ator = atores.nIdentidade inner join conjuntodetiposdepapeis on atorPapeis.tiposDePapel = conjuntodetiposdepapeis.idTiposDePapel order by atorPapeis.createdAt;
#atorPapeis admin -----------------------------------------#atorPapeis admin -----------------------------------------#atorPapeis admin -----------------------------------------#atorPapeis admin -----------------------------------------#atorPapeis admin -----------------------------------------#atorPapeis admin -----------------------------------------


#generos admin -----------------------------------------
select * from generos order by createdAt;
#generos admin -----------------------------------------


#tiposDePapeis admin -----------------------------------------
select * from conjuntodetiposdepapeis order by createdAt;
#tiposDePapeis admin -----------------------------------------


#users admin -----------------------------------------
select * from users order by createdAt;
#users admin -----------------------------------------


#Novidades -----------------------------------------------------------------#Novidades -----------------------------------------------------------------#Novidades -----------------------------------------------------------------#Novidades -----------------------------------------------------------------#Novidades ------------------------------------
SELECT nome as nomeGeral, nome as chavePrimaria, image, createdAt, 1 as categoria FROM realizadores UNION SELECT nome as nomeGeral, nome as chavePrimaria, image, createdAt, 2 as categoria FROM estudios UNION SELECT nomeCinema as nomeGeral, concat(nomeCinema, " ", localidade) as chavePrimaria, image, createdAt, 3 as categoria FROM cinemas UNION SELECT nome as nomeGeral, nIdentidade as chavePrimaria, image, createdAt, 4 as categoria FROM atores UNION SELECT tituloOriginal as nomeGeral, idFilme as chavePrimaria, image, createdAt, 5 as categoria FROM filmes order by createdAt LIMIT 6;
#Novidades -----------------------------------------------------------------#Novidades -----------------------------------------------------------------#Novidades -----------------------------------------------------------------#Novidades -----------------------------------------------------------------#Novidades ------------------------------------


#Itens -----------------------------------------------------------------#Itens -----------------------------------------------------------------#Itens -----------------------------------------------------------------#Itens -----------------------------------------------------------------#Itens -----------------------------------------------------------------#Itens ------------------------------------------------------------------
SELECT realizadores.nome as nomeGeral, realizadores.nome as chavePrimaria, image, realizadores.updatedAt, 1 as categoria, idUser FROM realizadores left join realizadoresFavoritos on realizadores.nome = realizadoresFavoritos.realizadoreNome UNION SELECT nome as nomeGeral, nome as chavePrimaria, image, estudios.updatedAt, 2 as categoria, idUser FROM estudios left join estudiosFavoritos on estudios.nome = estudiosFavoritos.idEstudio UNION SELECT cinemas.nomeCinema as nomeGeral, concat(cinemas.nomeCinema, " ", cinemas.localidade) as chavePrimaria, image, cinemas.updatedAt, 3 as categoria, idUser FROM cinemas left join cinemasFavoritos on cinemas.nomeCinema = cinemasFavoritos.nomeCinema and cinemas.localidade = cinemasFavoritos.localidade UNION SELECT nome as nomeGeral, atores.nIdentidade as chavePrimaria, image, atores.updatedAt, 4 as categoria, idUser FROM atores left join atoresFavoritos on atores.nIdentidade = atoresFavoritos.ator UNION SELECT tituloOriginal as nomeGeral, filmes.idFilme as chavePrimaria, image, filmes.updatedAt as updatedAt, 5 as categoria, filmesFavoritos.idUser FROM filmes left join filmesFavoritos on filmes.idFilme = filmesFavoritos.idFilme order by nomeGeral;
#Itens -----------------------------------------------------------------#Itens -----------------------------------------------------------------#Itens -----------------------------------------------------------------#Itens -----------------------------------------------------------------#Itens -----------------------------------------------------------------#Itens ------------------------------------------------------------------

#Itens  admin  -----------------------------------------------------------------#Itens  admin  -----------------------------------------------------------------#Itens  admin  -----------------------------------------------------------------##Itens  admin  -----------------------------------------------------------------#I#Itens  admin -----------------------------------------------------------------#Itens  admin  ------------------------------------------------------------------
SELECT realizadores.nome as nomeGeral, realizadores.nome as chavePrimaria, image, realizadores.updatedAt, 1 as categoria FROM realizadores UNION SELECT nome as nomeGeral, nome as chavePrimaria, image, estudios.updatedAt, 2 as categoria FROM estudios UNION SELECT cinemas.nomeCinema as nomeGeral, concat(cinemas.nomeCinema, " ", cinemas.localidade) as chavePrimaria, image, cinemas.updatedAt, 3 as categoria FROM cinemas UNION SELECT nome as nomeGeral, atores.nIdentidade as chavePrimaria, image, atores.updatedAt, 4 as categoria FROM atores UNION SELECT tituloOriginal as nomeGeral, filmes.idFilme as chavePrimaria, image, filmes.updatedAt as updatedAt, 5 as categoria FROM filmes order by nomeGeral;
#Itens  admin  -----------------------------------------------------------------#Itens  admin  -----------------------------------------------------------------#Itens  admin  -----------------------------------------------------------------##Itens  admin  -----------------------------------------------------------------#I#Itens  admin -----------------------------------------------------------------#Itens  admin  ------------------------------------------------------------------



#filmes -----------------------------------------------------------------#filmes -----------------------------------------------------------------#filmes -----------------------------------------------------------------#filmes -----------------------------------------------------------------#filmes -----------------------------------------------------------------#filmes ------------------------------------------------------------------#filmes ------------------------------------------------------------------#filmes ------------------
select filmes.idFilme as idFilme, filmes.tituloOriginal, filmes.tituloPortugues, filmes.sinopse, filmes.duracaoDasFilmagens, filmes.anoLancamento, filmes.custoTotal, filmes.image, filmes.updatedAt, filmes.nomeEstudio, filmes.realizador, generos.genero, atores.nome, filmesFavoritos.idUser from filmes left join filmeGenero on filmes.idFilme = filmeGenero.idFilme left join generos on filmeGenero.idGenero = generos.idGenero left join atorFilme on filmes.idFilme = atorFilme.idFilme left join atores on atorfilme.ator = atores.nIdentidade left join filmesFavoritos on filmes.idFilme = filmesFavoritos.idFilme order by filmes.tituloOriginal;
#filmes -----------------------------------------------------------------#filmes -----------------------------------------------------------------#filmes -----------------------------------------------------------------#filmes -----------------------------------------------------------------#filmes -----------------------------------------------------------------#filmes ------------------------------------------------------------------#filmes ------------------------------------------------------------------#filmes ------------------

#filmes admin -----------------------------------------------------------------#filmes admin -----------------------------------------------------------------#filmes admin -----------------------------------------------------------------#filmes admin -----------------------------------------------------------------#filmes admin -----------------------------------------------------------------#filmes admin -----------------------------------------------------------------#filmes admin -----------------------------------------------------------------#filmes admin -----------------------------------------------------------------#f
select filmes.idFilme as idFilme, filmes.tituloOriginal, filmes.tituloPortugues, filmes.sinopse, filmes.duracaoDasFilmagens, filmes.anoLancamento, filmes.custoTotal, filmes.image, filmes.updatedAt, filmes.nomeEstudio, filmes.realizador, generos.genero, atores.nome from filmes left join filmeGenero on filmes.idFilme = filmeGenero.idFilme left join generos on filmeGenero.idGenero = generos.idGenero left join atorFilme on filmes.idFilme = atorFilme.idFilme left join atores on atorfilme.ator = atores.nIdentidade order by filmes.tituloOriginal;
#filmes admin -----------------------------------------------------------------#filmes admin -----------------------------------------------------------------#filmes admin -----------------------------------------------------------------#filmes admin -----------------------------------------------------------------#filmes admin -----------------------------------------------------------------#filmes admin -----------------------------------------------------------------#filmes admin -----------------------------------------------------------------#filmes admin -----------------------------------------------------------------#f



#realizadores -----------------------------------------------------------------#realizadores -----------------------------------------------------------------#realizadores -----------------------------------------------------------------
select realizadores.nome, realizadores.telefone, realizadores.image, realizadores.updatedAt, filmes.tituloOriginal, realizadoresFavoritos.idUser from realizadores left join filmes on realizadores.nome = filmes.realizador left join realizadoresFavoritos on realizadores.nome = realizadoresFavoritos.realizadoreNome order by realizadores.nome;
#realizadores -----------------------------------------------------------------#realizadores -----------------------------------------------------------------#realizadores -----------------------------------------------------------------

#realizadores admin-----------------------------------------------------------------#realizadores admin-----------------------------------------------------------------#realizadores admin-----------------------------------------------------------------#realizadores admin-----------------------------------------------------------------
select realizadores.nome, realizadores.telefone, realizadores.image, realizadores.updatedAt, filmes.tituloOriginal from realizadores left join filmes on realizadores.nome = filmes.realizador order by realizadores.nome;
#realizadores admin-----------------------------------------------------------------#realizadores admin-----------------------------------------------------------------#realizadores admin-----------------------------------------------------------------#realizadores admin-----------------------------------------------------------------



#estudios -----------------------------------------------------------------#estudios -----------------------------------------------------------------#estudios -----------------------------------------------------------------#estudios ----------------
select estudios.nome, estudios.dono, estudios.dataFund, estudios.morada, estudios.lucroAnoAnterior, estudios.image, estudios.updatedAt, filmes.tituloOriginal, estudiosFavoritos.idUser from estudios left join filmes on estudios.nome = filmes.nomeEstudio left join estudiosFavoritos on estudios.nome = estudiosFavoritos.idEstudio order by estudios.nome;
#estudios -----------------------------------------------------------------#estudios -----------------------------------------------------------------#estudios -----------------------------------------------------------------#estudios ----------------

#estudios admin-----------------------------------------------------------------#estudios admin-----------------------------------------------------------------#estudios admin-----------------------------------------------------------------#estudios admin-----------------------------------------------------------------
select estudios.nome, estudios.dono, estudios.dataFund, estudios.morada, estudios.lucroAnoAnterior, estudios.image, estudios.updatedAt, filmes.tituloOriginal from estudios left join filmes on estudios.nome = filmes.nomeEstudio order by estudios.nome;
#estudios admin-----------------------------------------------------------------#estudios admin-----------------------------------------------------------------#estudios admin-----------------------------------------------------------------#estudios admin-----------------------------------------------------------------



#cinemas -----------------------------------------------------------------#cinemas -----------------------------------------------------------------#cinemas -----------------------------------------------------------------#cinemas -----------------------------------------------------------------#cinemas -----------------
select cinemas.nomeCinema, cinemas.localidade, cinemas.image, cinemas.updatedAt, filmes.tituloOriginal, cinemasFavoritos.idUser from cinemas left join filmeCinema on cinemas.nomeCinema = filmeCinema.nomeCinema and cinemas.localidade = filmeCinema.localidade left join filmes on filmeCinema.idFilme = filmes.idFilme left join cinemasFavoritos on cinemas.nomeCinema = cinemasFavoritos.nomeCinema and cinemas.localidade = cinemasFavoritos.localidade order by cinemas.nomeCinema;
#cinemas -----------------------------------------------------------------#cinemas -----------------------------------------------------------------#cinemas -----------------------------------------------------------------#cinemas -----------------------------------------------------------------#cinemas -----------------

#cinemas admin-----------------------------------------------------------------#cinemas admin-----------------------------------------------------------------#cinemas admin-----------------------------------------------------------------#cinemas admin-----------------------------------------------------------------#cinemas admin-----------------------------------------------------------------#cinemas admin-----------------------------------------------------------------
select cinemas.nomeCinema, cinemas.localidade, cinemas.image, cinemas.updatedAt, filmes.tituloOriginal from cinemas left join filmeCinema on cinemas.nomeCinema = filmeCinema.nomeCinema and cinemas.localidade = filmeCinema.localidade left join filmes on filmeCinema.idFilme = filmes.idFilme order by cinemas.nomeCinema;
#cinemas admin-----------------------------------------------------------------#cinemas admin-----------------------------------------------------------------#cinemas admin-----------------------------------------------------------------#cinemas admin-----------------------------------------------------------------#cinemas admin-----------------------------------------------------------------#cinemas admin-----------------------------------------------------------------



#atores -----------------------------------------------------------------#atores -----------------------------------------------------------------#atores -----------------------------------------------------------------#atores -----------------------------------------------------------------#atores -----------------------------------------------------------------#atores -----------------------------------------------------------------#atores -----------------------------------------------------------------#atores ------------------------------------
select atores.nome, atores.nIdentidade, atores.segurancaSocial, atores.nacionalidade, DATE_FORMAT(atores.dataNasc, "%Y-%m-%d") as dataNasc , atores.sexo, atores.telefone, atores.email, atores.image, atores.updatedAt, conjuntodetiposdepapeis.tiposDePapel, filmes.tituloOriginal, atoresFavoritos.idUser from atores left join atorPapeis on atores.nIdentidade = atorPapeis.ator left join conjuntodetiposdepapeis on atorPapeis.tiposDePapel = conjuntodetiposdepapeis.idTiposDePapel left join atorFilme on atores.nIdentidade = atorFilme.ator left join filmes on atorFilme.idFilme = filmes.idFilme left join atoresFavoritos on atores.nIdentidade = atoresFavoritos.ator order by atores.nome;
#atores -----------------------------------------------------------------#atores -----------------------------------------------------------------#atores -----------------------------------------------------------------#atores -----------------------------------------------------------------#atores -----------------------------------------------------------------#atores -----------------------------------------------------------------#atores -----------------------------------------------------------------#atores ------------------------------------

#atores admin -----------------------------------------------------------------#atores admin -----------------------------------------------------------------#atores admin -----------------------------------------------------------------#atores admin -----------------------------------------------------------------#atores admin -----------------------------------------------------------------#atores admin -----------------------------------------------------------------#atores admin -----------------------------------------------------------------#atores admin -----------------------------------------------------------------
select atores.nome, atores.nIdentidade, atores.segurancaSocial, atores.nacionalidade, DATE_FORMAT(atores.dataNasc, "%Y-%m-%d") as dataNasc , atores.sexo, atores.telefone, atores.email, atores.image, atores.updatedAt, conjuntodetiposdepapeis.tiposDePapel, filmes.tituloOriginal from atores left join atorPapeis on atores.nIdentidade = atorPapeis.ator left join conjuntodetiposdepapeis on atorPapeis.tiposDePapel = conjuntodetiposdepapeis.idTiposDePapel left join atorFilme on atores.nIdentidade = atorFilme.ator left join filmes on atorFilme.idFilme = filmes.idFilme order by atores.nome;
#atores admin -----------------------------------------------------------------#atores admin -----------------------------------------------------------------#atores admin -----------------------------------------------------------------#atores admin -----------------------------------------------------------------#atores admin -----------------------------------------------------------------#atores admin -----------------------------------------------------------------#atores admin -----------------------------------------------------------------#atores admin -----------------------------------------------------------------



#counts -----------------------------------------------------------------
select count(idFilme) as numero from filmes;
select count(nome) as numero from estudios;
select count(nomeCinema) as numero from cinemas;
select count(nome) as numero from realizadores;
select count(nome) as numero from atores;
#counts -----------------------------------------------------------------

describe utentes;


