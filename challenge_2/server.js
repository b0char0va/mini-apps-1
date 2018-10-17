var cors = require('cors');
var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');
var fs = require('fs');
var busboy = require('connect-busboy');
var port = 3000;

var app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(busboy());
app.use(express.static(path.join(__dirname, '/client')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


app.post('/', (req, res) => {
    req.busboy.on('file', function (fieldname, file, filename) {
        console.log("Uploading: " + filename);
        res.writeHead(201, {'Content-Type': 'text/plain'});
        res.end("hey");
    })




    // var data = [req.body];
    //
    // var flattened = start(data);
    // var filteredArray = removeChildrenProp(flattened);
    //
    // var fields = Object.keys(filteredArray[0]);
    // var replacer = function(key, value) { return value === null ? '' : value };
    // var csv = filteredArray.map(function (row) {
    //     return fields.map(function (fieldName) {
    //         return JSON.stringify(row[fieldName], replacer)
    //     }).join(',')
    // });
    // csv.unshift(fields.join(',')); // add header column
    // var finalcsv = csv.join('\r\n');
    // console.log(finalcsv);
    // res.writeHead(201, {'Content-Type': 'application/octet-stream'});
    // res.end(finalcsv);
});



var start = function(arr) {
    var data = JSON.parse(JSON.stringify(arr));
    var array = [data[0]];

    if (data[0].children && data[0].children.length > 0) {
        var recurse = function (arr) {
            for (var i = 0; i < arr.length; i++) {
                array.push(arr[i]);

                if(arr[i].children.length > 0){
                    recurse(arr[i].children);
                }
            }
        };

        recurse(data[0].children);
        return array;
    }
};

var removeChildrenProp = function (arr) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i]['children']){
            delete arr[i]['children'];
        }
       newArr.push(arr[i]);
    }
    return newArr;
};
