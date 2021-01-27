const Sequelize = require("sequelize");
const sequelize = require("./database");

const bcrypt = require("bcrypt"),
    BCRYPT_SALT_ROUNDS = 12;


//criar a tabela conjuntoDeTiposDePapeis
const ConjuntoDeTiposDePapeis = require("./models/conjuntodeTiposDePapeis");

//criar a tabela realizadores
const Realizadores = require("./models/realizadores");

//criar a tabela generos
const Generos = require("./models/generos");

//criar a tabela cinemas
const Cinemas = require("./models/cinemas");

//criar a tabela estudios
const Estudios = require("./models/estudios");

//criar a tabela atores
const Atores = require("./models/atores");

//criar a tabela atorPapeis
const AtorPapeis = require("./models/atorPapeis");

//criar a tabela filmes
const Filmes = require("./models/filmes");

//criar a tabela atorFilme
const AtorFilme = require("./models/atorFilme");


//criar a tabela filmeGenero
const FilmeGenero = require("./models/filmeGenero");


//criar a tabela filmeCinema
const FilmeCinema = require("./models/filmeCinema");

//criar a tabela users caso ainda não exista
const User = require("./models/users"); 

//criar a tabela filmesFavoritos 
const FilmesFavoritos = require("./models/filmesFavoritos");

//criar a tabela atoresFavoritos 
const AtoresFavoritos = require("./models/atoresFavoritos");

//criar a tabela estudiosFavoritos 
const EstudiosFavoritos = require("./models/estudiosFavoritos");

//criar a tabela realizadoresFavoritos 
const RealizadoresFavoritos = require("./models/realizadoresFavoritos");

//criar a tabela cinemasFavoritos 
const CinemasFavoritos = require("./models/cinemasFavoritos");



//syncronizar

(async () => {
    await sequelize.sync({ force: true });
    
    //Inserts
    //conjuntoDeTiposdePapeis
    ConjuntoDeTiposDePapeis.create({
        tiposDePapel: "Lunático"
    }).then((tiposDePapel) => {
        console.log("\nTipo de dado adicionado!\n");
    });

    ConjuntoDeTiposDePapeis.create({
        tiposDePapel: "Inteligente"
    }).then((tiposDePapel) => {
        console.log("\nTipo de dado adicionado!\n");
    });

    ConjuntoDeTiposDePapeis.create({
        tiposDePapel: "Cómico"
    }).then((tiposDePapel) => {
        console.log("\nTipo de dado adicionado!\n");
    });

    ConjuntoDeTiposDePapeis.create({
        tiposDePapel: "Tecnológico"
    }).then((tiposDePapel) => {
        console.log("\nTipo de dado adicionado!\n");
    });

    //realizadores
    Realizadores.create({
        nome: "Anthony Russo e Joe Russo",
        telefone: "+315 214 242 234",
        image: "https://media1.fdncms.com/clevescene/imager/u/original/31166174/grlor71w-450x626.jpeg"
    });

    Realizadores.create({
        nome: "Jacob Chase",
        telefone: "+315 215 242 234",
        image: "https://m.media-amazon.com/images/M/MV5BOTIxMDU1NTg5OF5BMl5BanBnXkFtZTcwMzMxNjYyMQ@@._V1_FMjpg_UX1000_.jpg"
    });

    Realizadores.create({
        nome: "Cate Shortland",
        telefone: "+315 215 232 234",
        image: "https://m.media-amazon.com/images/M/MV5BNzk4Mzk2NTY2M15BMl5BanBnXkFtZTgwOTk4NTAyMTI@._V1_.jpg"
    });

    Realizadores.create({
        nome: "Gore Verbinski",
        telefone: "+315 215 944 234",
        image: "https://musicimage.xboxlive.com/catalog/video.contributor.c1cb4000-0200-11db-89ca-0019b92a3933/image?locale=en-ca&target=circle"
    });

    //Generos

    Generos.create({
        genero: "Ação"
    });
    Generos.create({
        genero: "Romance"
    });

    Generos.create({
        genero: "Aventura"
    });

    Generos.create({
        genero: "Comédia"
    });

    Generos.create({
        genero: "Fantasia"
    });

    Generos.create({
        genero: "Horror"
    });

    Generos.create({
        genero: "Mistério"
    });

    Generos.create({
        genero: "Drama"
    });

    //Cinemas
    Cinemas.create({
        nomeCinema: "NOS",
        localidade: "Centro Comercial Colombo",
        image: "https://pbs.twimg.com/profile_images/467407726524391425/e100yeD4.png"
    });

    Cinemas.create({
        nomeCinema: "UCI",
        localidade: "UBBO",
        image: "https://pbs.twimg.com/profile_images/1148208610184482817/4PQn2FUf_400x400.png"
    });

    //estudios
    Estudios.create({
        nome: "MarvelStudios",
        dono: "Kevin Feige",
        dataFund: "1993",
        morada: "Burbank, Califórnia, Estados Unidos",
        lucroAnoAnterior: 16800000000,
        image: "https://i.pinimg.com/originals/27/fd/89/27fd89fce661dfe0936e68135613edbe.jpg"
    });

    Estudios.create({
        nome: "The Picture Company",
        dono: "Andrew Rona",
        dataFund: "2014",
        morada: "UK, Bracknell",
        lucroAnoAnterior: 5000000,
        image: "https://cdn.shopify.com/s/files/1/0398/8596/3432/files/TPC_LOGO_1250x.png?v=1590474043"
    });

    Estudios.create({
        nome: "Walt Disney Pictures",
        dono: "Sean Bailey",
        dataFund: "1983",
        morada: "Burbank, Califórnia, Estados Unidos",
        lucroAnoAnterior: 180000000,
        image: "https://logowiki.net/uploads/logo/w/walt-disney-pictures.svg"
    });

    //atores
    Atores.create({
        nome: "Robert Downey Jr",
        nIdentidade: "472343425",
        segurancaSocial: "22233243",
        nacionalidade: "Americano",
        dataNasc: "1965-4-4",
        sexo: "M",
        telefone: "+315 965 275 597",
        email: "Robert@gmail.com",
        image: "https://i0.wp.com/pipocamoderna.com.br/wp-content/uploads/2018/03/robertdowneyjr.jpg"
    });

    Atores.create({
        nome: "Johnny Depp",
        nIdentidade: "672343425",
        segurancaSocial: "62233243",
        nacionalidade: "Americano",
        dataNasc: "1963-6-4",
        sexo: "M",
        telefone: "+315 965 375 597",
        email: "johnny@gmail.com",
        image: "https://vejasp.abril.com.br/wp-content/uploads/2016/12/johnny-depp4.jpg"
    });

    //atorPapeis
    AtorPapeis.create({
        tiposDePapel: 1,
        ator: "472343425"
    });

    AtorPapeis.create({
        tiposDePapel: 2,
        ator: "472343425"
    });

    AtorPapeis.create({
        tiposDePapel: 4,
        ator: "472343425"
    });
    AtorPapeis.create({
        tiposDePapel: 1,
        ator: "672343425"
    });

    AtorPapeis.create({
        tiposDePapel: 2,
        ator: "672343425"
    });

    AtorPapeis.create({
        tiposDePapel: 3,
        ator: "672343425"
    });

    //filmes
    Filmes.create({
        tituloOriginal: "Advengers: Endgame",
        tituloPortugues: "Vingadores: Ultimato",
        sinopse : "Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos.   Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.",
        duracaoDasFilmagens: 24,
        anoLancamento: 2019,
        custoTotal: 357000000,
        nomeEstudio: "MarvelStudios",
        realizador: "Anthony Russo e Joe Russo",
        image: "https://i.pinimg.com/originals/ee/ba/6f/eeba6f6e38d5df40ca8ac7ad35d32282.jpg"
    });

    
    Filmes.create({
        tituloOriginal: "EXEMPLO",
        tituloPortugues: "EXEMPLO",
        sinopse : "EXEMPLO",
        duracaoDasFilmagens: 30,
        anoLancamento: 10,
        custoTotal: 357000000,
        nomeEstudio: "MarvelStudios",
        realizador: "Anthony Russo e Joe Russo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Exemplo.svg/989px-Exemplo.svg.png"
    });

    Filmes.create({
        tituloOriginal: "Come Play",
        tituloPortugues: "A Maldição de Larry",
        sinopse : "Oliver (Azhy Robertson) é um rapaz solitário que se sente diferente de toda a gente.   Desesperado para arranjar um amigo, procura consolo e refúgio no telemóvel e no tablet que nunca larga.   Quando uma misteriosa criatura utiliza os dispositivos de Oliver contra ele, para conseguir entrar no nosso mundo, os pais de Oliver (Gillian Jacobs e John Gallagher Jr.) têm de lutar para salvar o filho do monstro por trás dos ecrãs.",
        duracaoDasFilmagens: 12,
        anoLancamento: 2020,
        custoTotal: 50000,
        nomeEstudio: "The Picture Company",
        realizador: "Jacob Chase",
        image: "https://cdn-0.tvprofil.com/img/covers/img317960-tv0.jpg"
    });

    Filmes.create({
        tituloOriginal: "Black Widow",
        tituloPortugues: "Viúva Negra",
        sinopse : "Em Viúva Negra, após seu nascimento, Natasha Romanoff (Scarlett Johansson) é dada à KGB, que a prepara para se tornar sua agente definitiva.   Quando a URSS rompe, o governo tenta matá-la enquanto a ação se move para a atual Nova York, onde ela trabalha como freelancer.",
        duracaoDasFilmagens: 12,
        anoLancamento: 2020,
        custoTotal: 150000000,
        nomeEstudio: "MarvelStudios",
        realizador: "Cate Shortland",
        image: "https://p1.itc.cn/images01/20201211/e4bd5b438deb4649b5c3ac8d3d78640c.jpeg"
    });

    Filmes.create({
        tituloOriginal: "Pirates of the Caribbean: The Curse of the Black Pearl",
        tituloPortugues: "Piratas das Caraíbas: A Maldição do Pérola Negra",
        sinopse : "O pirata Jack Sparrow tem seu navio saqueado e roubado pelo capitão Barbossa e sua tripulação.   Com o navio de Sparrow, Barbossa invade a cidade de Port Royal, levando consigo Elizabeth Swann, filha do governador.   Para recuperar sua embarcação, Sparrow recebe a ajuda de Will Turner, um grande amigo de Elizabeth.   Eles desbravam os mares em direção à misteriosa Ilha da Morte, tentando impedir que os piratas-esqueleto derramem o sangue de Elizabeth para desfazer a maldição que os assola.",
        duracaoDasFilmagens: 12,
        anoLancamento: 2003,
        custoTotal: 140000000,
        nomeEstudio: "Walt Disney Pictures",
        realizador: "Gore Verbinski",
        image: "https://cartelesmix.es/cartelesdecine/wp-content/uploads/2018/01/piratascaribe03003.jpg"
    });

    //atorFilme
    AtorFilme.create({
        nomePersonagem: "Tony Stark",
        ator: "472343425",
        idFilme: 1
    });

    AtorFilme.create({
        nomePersonagem: "Captain Jack Sparrow",
        ator: "672343425",
        idFilme: 5
    });

    //filmeGenero
    FilmeGenero.create({
        idGenero: 1,
        idFilme: 1
    });

    FilmeGenero.create({
        idGenero: 3,
        idFilme: 1
    });

    FilmeGenero.create({
        idGenero: 5,
        idFilme: 1
    });

    FilmeGenero.create({
        idGenero: 7,
        idFilme: 3
    });

    FilmeGenero.create({
        idGenero: 6,
        idFilme: 3
    });

    FilmeGenero.create({
        idGenero: 8,
        idFilme: 3
    });

    FilmeGenero.create({
        idGenero: 2,
        idFilme: 4
    });

    FilmeGenero.create({
        idGenero: 3,
        idFilme: 4
    });

    FilmeGenero.create({
        idGenero: 4,
        idFilme: 5
    });

    FilmeGenero.create({
        idGenero: 1,
        idFilme: 5
    });
    FilmeGenero.create({
        idGenero: 3,
        idFilme: 5
    });
    FilmeGenero.create({
        idGenero: 7,
        idFilme: 5
    });
    FilmeGenero.create({
        idGenero: 5,
        idFilme: 5
    });

    //filmeCinema
    FilmeCinema.create({
        nomeCinema: "NOS",
        localidade: "Centro Comercial Colombo",
        idFilme: 1
    });

    FilmeCinema.create({
        nomeCinema: "NOS",
        localidade: "Centro Comercial Colombo",
        idFilme: 4
    });

    FilmeCinema.create({
        nomeCinema: "NOS",
        localidade: "Centro Comercial Colombo",
        idFilme: 5
    });

    FilmeCinema.create({
        nomeCinema: "UCI",
        localidade: "UBBO",
        idFilme: 2
    });

    FilmeCinema.create({
        nomeCinema: "UCI",
        localidade: "UBBO",
        idFilme: 3
    });
    //criar um utilizador
    bcrypt.hash("cliente", BCRYPT_SALT_ROUNDS).then((hashedPassword) => {
        User.create({
            username: "cliente",
            password: hashedPassword,
            email: "cliente@gmail.com"
        }).then((user) => {
            console.log("\nUtilizador adicionado!\n");
        });
    });

    bcrypt.hash("chefe", BCRYPT_SALT_ROUNDS).then((hashedPassword) => {
        User.create({
            username: "chefe",
            password: hashedPassword,
            email: "chefe@gmail.com",
            admin: true
        }).then((user) => {
            console.log("\nUtilizador adicionado!\n");
        });
    });


  })();


