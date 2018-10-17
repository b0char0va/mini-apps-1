var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/public')));

app.listen(port, () => {
    console.log(`listening at ${port}`);
});







