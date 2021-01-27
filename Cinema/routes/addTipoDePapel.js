
const TipoDePapel = require("./../models/conjuntodeTiposDePapeis");

module.exports = (app) => {
    
    app.post("/addTipoDePapel", (req, res) => {
        const tiposDePapel = req.body.tipoDePapel;
        TipoDePapel.findOne({
            where:{
                tiposDePapel: tiposDePapel
            }
        }).then((verificacao) => {
            if(verificacao == null){
                TipoDePapel.create({
                    tiposDePapel: tiposDePapel
                });
                res.status(200).send(true);
            }else{
                res.status(409).send("Tipo de papel já está na base de dados!");
            }
        });
        
    });
}