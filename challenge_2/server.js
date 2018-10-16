var cors = require('cors');
var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');
var fs = require('fs');
var port = 3000;

var app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/client')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


app.post('/', (req, res) => {
    // var str = '';
    // req.setEncoding('utf8');
    //
    // req.on('data', function(chunk) {
    //     str += chunk;
    // });
    //
    // req.on('end', function() {
    //     console.log(str);
    //     res.end(json.stringify(str));
    // });
    //
    //
    var data = req.body;
    // var fields = Object.keys(data);
    // var replacer = function(key, value) { return value === null ? '' : value };
    // var csv = fields.map(function(row){
    //     return fields.map(function(fieldName){
    //         return JSON.stringify(row[fieldName], replacer)
    //     }).join(',')
    // });
    // csv.unshift(fields.join(',')); // add header column
    //
    // var finalcsv = csv.join('\r\n');

    res.writeHead(201, { 'Content-Type': 'application/octet-stream' });
    res.end(JSON.stringify(data));
});

