
//enviar email
const nodemailer = require('nodemailer');
const { user, pass } = require('./../config/smtp');
const SMPT_CONFIG = require('./../config/smtp');
const transporter = nodemailer.createTransport({
    host: SMPT_CONFIG.host,
    port: SMPT_CONFIG.port,
    secure: false,
    auth: {
        user: SMPT_CONFIG.user,
        pass: SMPT_CONFIG.pass
    },
    tls: {
        rejectUnauthorized: false
    }
});

module.exports = (app) => {
    app.post('/enviarEmail', async (req, res) => {
        const nome = req.body.cname;
        const emailDoUtilizador = req.body.cemail;
        const mensagem = req.body.cmessage;
        const sugestao = await transporter.sendMail({
            text: mensagem,
            subject: 'Email de um utilizador do Hollywood',
            from: nome + ' ' + emailDoUtilizador,
            to: ['emaildetesteprofissional@gmail.com']
        });
        const resposta = await transporter.sendMail({
            text: "Sugestão recebida! Este site é desenvolvido apenas para si!\nSão os utilizadores que ajudam a melhorar este site.\nObrigado " + nome + "!\n\nEste email trata-se de um No-reply email, pelo que pedimos para que não responda ao mesmo.",
            subject: 'Resposta automática à sugestão enviada ao Hollywood',
            from: nome,
            to: [emailDoUtilizador]
        });
        res.send(true);

    });
}