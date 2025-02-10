const express = require('express');
const app =  express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res) => {
    res.send("THIS IS THE HOEMPAGE")
});


app.listen('8080',() => {
    console.log("SERVER IS RUNINNG ON PORT 8080")
});