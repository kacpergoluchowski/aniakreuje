const express = require('express');
const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer');
const bp = require('body-parser');
const port = 8282;

app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({extended: true}));


const multer = require('multer')
const storage = multer.memoryStorage();
const upload = multer({ storage: multer.memoryStorage()});

app.listen(port, (req, res) => {
    console.log("OK!")
})

app.get('/', (req, res) => {
    res.send("App started!")
    res.status(200).end();
})

app.post('/sendMail',  upload.single('file'), (req,res) => {
    const parsedData = JSON.parse(req.body.data);
    const {email, content, type} = parsedData;
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
        text: `Zamówienie typu ${type} złożone na mail ${email}. Uwagi dodatkowe: ${content}`,
        attachments: [{
            filename: req.file.originalname,
            content: req.file.buffer
        }]
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).json({ error: 'Email nie został wysłany.' });
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({ message: 'Email został wysłany!.' });
        }
    });
    
    res.status(200).end();
})