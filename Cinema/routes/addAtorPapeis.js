

const AtorPapeis = require("./../models/atorPapeis");
module.exports = (app) => {
    
    app.post("/addAtorPapeis", (req, res) => {
        const ator = req.body.ator;
        const papel = req.body.papel;
        AtorPapeis.findOne({
            where:{
                ator: ator,
                tiposDePapel: papel
            }
        }).then((verificacao) => {
            if(verificacao == null){
                AtorPapeis.create({
                    ator: ator,
                    tiposDePapel: papel
                });
                res.status(200).send(true);
            }else{
                res.status(409).send("Ator já tem esse papel na base de dados!");
            }
        });
        
    });
}