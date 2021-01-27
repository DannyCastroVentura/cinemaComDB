const jwtSecret = require("./jwtConfig"),
  bcrypt = require("bcrypt"),
  BCRYPT_SALT_ROUNDS = 12,
  passport = require("passport"),
  localStrategy = require("passport-local").Strategy,
  tables = require("../database"),
  JWTstrategy = require("passport-jwt").Strategy,
  ExtractJWT = require("passport-jwt").ExtractJwt;
const User = require('./../models/users');

passport.use(
  "register",
  new localStrategy(
    (username, password, done) => {
      try {
        console.log("chegou aqui");
        User
          .findOne({
            where: {
              username: username,
            },
          })
          .then((user) => {
            if (user != null) {
              console.log("Nome de utilizador já existe!");
              return done(null, false, {
                message: "Nome de utilizador já existe!",
              });
              
            } else {
              bcrypt
                .hash(password, BCRYPT_SALT_ROUNDS)
                .then((hashedPassword) => {
                  User
                    .create({
                      username: username,
                      email: "xpto",
                      password: hashedPassword
                    })
                    .then((user) => {
                      console.log("Utilizador adicionado!");
                      return done(null, user);
                    });
                });
            }
          });
      } catch (err) {
        done(err);
      }
    }
  )
);

passport.use(
  "login",
  new localStrategy(
    (username, password, done) => {
      try {
        User
          .findOne({
            where: {
              username: username,
            },
          })
          .then((user) => {
            if (user == null) {
              return done(null, false, {
                message: "Nome de utilizador inválido!",
              });
            } else {
              bcrypt.compare(password, user.password).then((response) => {
                if (response != true) {
                  console.log("A password não confere!");
                  return done(null, false, {
                    message: "A password não confere!",
                  });
                }
                console.log("Utilizador encontrado e autenticado!");
                console.log(user.username)
                return done(null, user);
              });
            }
          });
      } catch (err) {
        done(err);
      }
    }
  )
);


const opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken("JWT"),
  secretOrKey: jwtSecret.secret,
};

passport.use(
  "jwt",
  new JWTstrategy(opts, (jwt_payload, done) => {
    try {
      User
        .findOne({
          where: {
            username: jwt_payload.id,
          },
        })
        .then((user) => {
          if (user) {
            console.log("Utilizador encontrado na BD em passport!");
            done(null, user);
          } else {
            console.log("Utilizador não encontrado na BD!");
            done(null, false);
          }
        });
    } catch (err) {
      done(err);
    }
  })
);