
//defenir a jwt e a jwt secret
const jwt = require("jsonwebtoken");

module.exports = (app) => {

    app.post('/verificarToken', (req, res) => {
        const token = req.body;
        const decoded = jwt.decode(token.token, {complete: true});
        console.log('token: ' + token.token);
        console.log('Username da token: ' + decoded.payload.id);
        console.log('Privilegios da token: ' + decoded.payload.admin);
        res.json({
            "username":decoded.payload.id,
            "admin": decoded.payload.admin
        });
    });
}