export default function (req, res) {    
    let nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
        port: 465,
        host: 'smtp.gmail.com',
        auth: {
            user: 'caiomoizess2020@gmail.com',
            pass: 'Caio@08052000',
        },
        secure: true
    });

    const mailData = {
        from: 'caiomoizess2020@gmail.com',
        to: 'caiomoizess2014@gmail.com',
        subject: `Message from ${req.body.nome}`,
        text: req.body.mensagem + " | Enviado de: " + req.body.email,
        html: `<div>${ req.body.mensagem }</div><p>Enviado de: ${ req.body.email }</p>`
    };

    transporter.sendMail(mailData, function(err, info) {
        if (err)
            console.log(err);
        else
            console.log(info);
    })
    
    res.status(200);
}