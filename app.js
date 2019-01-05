const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const serveStatic = require('serve-static');
const nodemailer = require('nodemailer');

const port = process.env.PORT || 80;

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(serveStatic(__dirname + "/client/dist"));
app.use(express.static(__dirname + '/upload'))

app.use(async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});
const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 25,
    auth: {
        user: 'welcome@rl-property.com',
        pass: 'W4b7z9mx'
    }
});

app.post('/api/send-mail', (req, res) => {
    console.log(req.body)
    let mailOptions = {
        from: 'welcome@rl-property.com',
        // to: 'nikitadimitriev000@gmail.com',
        to: 'marketing@rl-property.com',
        subject: 'Заявка',
        html: `<ul>
                    <li>Имя: ${req.body.name}</li>
                    <li>Email: ${req.body.email}</li>
                    <li>Coment: ${req.body.coment}</li>
                </ul>`
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            res.json(info.response).end();
        }
    })
})
app.listen(port);
console.log('Magic happens on port ' + port);
module.exports = app;