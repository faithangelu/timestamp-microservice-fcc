// const { application } = require('express');
var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname+ '/views/index.html');
})

app.post('/api/:date', (req, res) => {   
    var date = req.params
    res.json(req.params);
})

app.get('/api/', (req, res) => {
    res.json({ unix: Date.parse(new Date()), utc: new Date().toString()})
})

app.get('/api/:date', (req, res) => {
    var date = req.params.date;
    var dateParam = new Date(date);
    // var unixTime = Date.parse(date);    
    
    if (date === typeof Number) {
        res.json({ unix: Date.parse(date), utc: dateParam.toString()})   
        console.log(dateParam)             
        console.log(typeof dateParam)             
    } else {
        res.json({ error: "Invalid Date" })    
        console.log(1)
    } 
})
// application.get('/api/')