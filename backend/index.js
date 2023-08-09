const express = require('express');
const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer');
const bp = require('body-parser');
const port = 8282;

app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({extended: true}));


app.listen(port, (req, res) => {
    console.log("OK!")
})

app.get('/', (req, res) => {
    res.send("App started!")
    res.status(200).end();
})

app.post('/sendMail', (req,res) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "kgoluchowski112@gmail.com",
            pass: "uyzaetzqltoqwllk"
        }
    })

    var mailOptions = {
        from: 'kgoluchowski112@gmail.com',
        to: 'aniakreuje@gmail.com',
        subject: "Zamówienie",
        text: `Zamówienie typu ${req.body.type} złożone na mail ${req.body.email}. Uwagi dodatkowe: ${req.body.content}`
    };
    
    transporter.sendMail(mailOptions, function(err, info) {
        if(err)
            console.log(err)
        else
            console.log("Email sent: " + info.response);
    })
    
    res.status(200).end();
})