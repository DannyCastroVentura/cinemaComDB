

const express = require('express');
const app = express();
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('View engine', 'handlebars');
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(3000, () => console.log("Listening in port 3000"));
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
require('./config/passport');
app.use(passport.initialize());
app.use(passport.session())

//routes
require('./routes/index')(app);
require('./routes/admin')(app);
require('./routes/enviarEmail')(app);
require('./routes/loginUser')(app);
require('./routes/registarUser')(app);
require('./routes/verificarToken')(app);

require('./routes/addFilme')(app);
require('./routes/addAtor')(app);
require('./routes/addEstudio')(app);
require('./routes/addCinema')(app);
require('./routes/addRealizador')(app);
require('./routes/addTipoDePapel')(app);
require('./routes/addGenero')(app);
require('./routes/addAtorPapeis')(app);
require('./routes/addAtorFilme')(app);
require('./routes/addFilmeGenero')(app);
require('./routes/addFilmeCinema')(app);

require('./routes/eliminarFilme')(app);
require('./routes/eliminarAtor')(app);
require('./routes/eliminarEstudio')(app);
require('./routes/eliminarCinema')(app);
require('./routes/eliminarRealizador')(app);
require('./routes/eliminarTipoDePapel')(app);
require('./routes/eliminarGenero')(app);
require('./routes/eliminarAtorPapeis')(app);
require('./routes/eliminarAtorFilme')(app);
require('./routes/eliminarFilmeGenero')(app);
require('./routes/eliminarFilmeCinema')(app);

require('./routes/alterarFilme')(app);
require('./routes/alterarRealizador')(app);
require('./routes/alterarCinema')(app);
require('./routes/alterarEstudio')(app);
require('./routes/alterarAtor')(app);

require('./routes/porFavoritoFilme')(app);
require('./routes/porFavoritoAtor')(app);
require('./routes/porFavoritoRealizador')(app);
require('./routes/porFavoritoCinema')(app);
require('./routes/porFavoritoEstudio')(app);

require('./routes/tirarFavoritoAtor')(app);
require('./routes/tirarFavoritoFilme')(app);
require('./routes/tirarFavoritoRealizador')(app);
require('./routes/tirarFavoritoCinema')(app);
require('./routes/tirarFavoritoEstudio')(app);

require('./routes/alterarUser')(app);


module.exports = app;