
const User = require('./../models/users');
const passport = require('passport');

module.exports = (app) => {
    
app.post("/registarUser", (req, res, next) => {
    console.log(req.body);
    passport.authenticate("register", (err, user, info) => {
      if (err) {
        console.log(err);
      }
      if (info != undefined) {
        res.status(200).send({message: `${info.message}`}); // envia ao cliente a indicação da falha de registo
      } else {
        req.logIn(user, (err) => {
          // este método é necessário para as callback funcionarem
          const data = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
          };
          User.findOne({
            where: {
              username: data.username,
            },
          }).then((user) => {
            user
              .update({
                email: data.email
              })
              .then(() => {
                console.log("Utilizador criado na BD!");
                res.status(200).send({ message: true });
              });
          });
        });
      }
    })(req, res, next);
  });
}