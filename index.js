// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



app.post('/api/:date', (req, res) => {   
  var date = req.params
  res.json(req.params);
})

app.get('/api/', (req, res) => {
  res.json({ unix: Date.parse(new Date()), utc: new Date().toString()})
})

app.get('/api/:date', (req, res) => {
  var date = (/^\d+$/.test(req.params.date) === true) ? parseInt(req.params.date) : req.params.date;
  var dateParam = new Date(date);
 

  
  if (Object.prototype.toString.call(dateParam) === '[object Date]' && isNaN(dateParam) === false) {
      res.json({ unix: Date.parse(dateParam), utc: dateParam.toUTCString()})   
  } else {
    res.json({error: "Invalid Date"})
  }
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
