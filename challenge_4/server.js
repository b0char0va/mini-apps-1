var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var port = 3000;

var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/client/dist')));
app.listen(port, () => {
    console.log(`listening at ${port}`);
});
