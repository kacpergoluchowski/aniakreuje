const express = require('express');
const app = express();
const cors = require('cors');
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
    console.log(req.body);
})