const nodemailer = require('nodemailer');
const { user, pass } = require('./config/smtp');

const SMPT_CONFIG = require('./config/smtp');

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


async function run() {
    console.log("Utilizador: " + user + "\nPalavra passe: " + pass);
    const mailSent = await transporter.sendMail({
        text: 'Texto do E-mail',
        subject: 'Assunto do E-mail',
        from: 'Daniel Ventura <emaildetesteprofissional@gmail.com>',
        to: ['emaildetesteprofissional@gmail.com', 'dannycastroventura@gmail.com']

    })
    console.log(mailSent);
}

run();