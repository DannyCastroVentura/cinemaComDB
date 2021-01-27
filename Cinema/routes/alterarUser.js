
const User = require("./../models/users");

module.exports = (app) => {    
    app.post("/alterarUser", (req, res) => {
        const userAAlterar = req.body.userAAlterar;
        const username = req.body.username;
        const email = req.body.email;
        const priv = req.body.priv;
        console.log("\n\nUsername: " + username + "\n\nEmail: " + email + "\n\nPriv: " + priv + "\n\nUsera alterar: " + userAAlterar);
        if(userAAlterar == username){
            User.update({
                username: username,
                email: email,
                admin: priv
            }, 
            {
                where:
                {
                    username: userAAlterar
                }
            }
            
            );
            res.status(200).send(true);
            return null;
        }
        User.findOne({
            where:{
                username: username
            }
        }).then((verificarUser) => {
            console.log(verificarUser);
            if(verificarUser == null){
                User.update({
                    username: username,
                    email: email,
                    admin: priv
                }, 
                {
                    where:
                    {
                        username: userAAlterar
                    }
                }
                
                );
                res.status(200).send(true);
            }else{
                res.status(409).send("User já existente");
            }
        });
        
    });
}