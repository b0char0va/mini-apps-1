var cors = require('cors');
var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');
var fs = require('fs');
var multer = require('multer');
var upload = multer({dest: '/tmp/'});
var port = 3000;

var app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/client')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


app.post('/', upload.any(), (req, res) => {

    fs.readFile(req.files[0].path,  "utf8", (err, content) => {
        var obj = JSON.parse(content.replace(/\r?\n|\r;/g, ''));

        var data = [obj];

        var flattened = start(data);
        var filteredArray = removeChildrenProp(flattened);

        var fields = Object.keys(filteredArray[0]);
        var replacer = function(key, value) { return value === null ? '' : value };
        var csv = filteredArray.map(function (row) {
            return fields.map(function (fieldName) {
                return JSON.stringify(row[fieldName], replacer)
            }).join(',')
        });
        csv.unshift(fields.join(',')); // add header column
        var finalcsv = csv.join('\r\n');

        fs.appendFile('content.csv', finalcsv, function (err) {
            if (err) throw err;
            res.writeHead(201, {'Content-Type': 'application/octet-stream'});
            res.end(finalcsv);
        });
    });
});


app.get('/',(req, res) => {

});


var start = function (arr) {
    var data = JSON.parse(JSON.stringify(arr));
    var array = [data[0]];

    if (data[0].children && data[0].children.length > 0) {
        var recurse = function (arr) {
            for (var i = 0; i < arr.length; i++) {
                array.push(arr[i]);

                if (arr[i].children.length > 0) {
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
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]['children']) {
            delete arr[i]['children'];
        }
        newArr.push(arr[i]);
    }
    return newArr;
};
