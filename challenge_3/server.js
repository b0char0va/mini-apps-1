var express = require('express');
var parser = require('body-parser');
var path = require('path');
var db = require('./db/index');

var app = express();
var port = 3000;

app.use(parser.json());
app.use(parser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, '/public')));

app.listen(port, () => {
    console.log(`listening at ${port}`);
});


// app.post('/', (req, res) => {
//
//     var name = (req.body.name).toString();
//     var email = (req.body.email).toString();
//     var password = (req.body.password).toString();
//     var address = (req.body.address).toString();
//     var city = (req.body.city).toString();
//     var state = (req.body.state).toString();
//     var zip_code = (req.body.zipcode).toString();
//     var phone_number = (req.body.phone_number).toString();
//     var credit_card = (req.body.credit_card).toString();
//     var expiry_date = (req.body.expiry_date).toString();
//     var CVV = (req.body.CVV).toString();
//     var billing_zip_code = (req.body.billing_zip_code).toString();
//
//     var sql = "INSERT INTO users (`name`,`email`,`password`,`address`,`city`,`state`,`zip_code`,`phone_number`,`credit_card`,`expiry_date`,`CVV`,`billing_zip_code`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
//     db.query(sql, [name, email, password, address, city, state, zip_code, phone_number, credit_card, expiry_date, CVV, billing_zip_code], (err, results)=>{
//         if(err){
//             throw err;
//         }else{
//             res.writeHead(201, {'Content-Type': 'application/json'});
//             res.end(JSON.stringify(results));
//         }
//     });
//
// });


app.post('/f1', (req, res) => {
    var name = (req.body.name).toString();
    var email = (req.body.email).toString();
    var password = (req.body.password).toString();

    var sql = "INSERT INTO users (`name`,`email`,`password`) VALUES (?, ?, ?)";
    db.query(sql, [name, email, password], (err, results)=>{
        if(err){
            throw err;
        }else{
            res.writeHead(201, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(results));
        }
    });
});

app.post('/f2', (req, res) => {
    var email = (req.body.email).toString();
    var address = (req.body.address).toString();
    var city = (req.body.city).toString();
    var state = (req.body.state).toString();
    var zip_code = (req.body.zipcode).toString();
    var phone_number = (req.body.phone_number).toString();

    var sql = 'UPDATE users SET address = ?, city = ?, state = ?, zip_code = ?, phone_number = ? WHERE email = ?';
    db.query(sql, [address, city, state, zip_code, phone_number, email], (err, results)=>{
        if(err){
            throw err;
        }else{
            res.writeHead(201, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(results));
        }
    });
});


app.post('/f3', (req, res) => {

    var email = (req.body.email).toString();
    var credit_card = (req.body.credit_card).toString();
    var expiry_date = (req.body.expiry_date).toString();
    var CVV = (req.body.CVV).toString();
    var billing_zip_code = (req.body.billing_zip_code).toString();

    var sql = 'UPDATE users SET credit_card = ?, expiry_date = ?, CVV = ?, billing_zip_code = ? WHERE email = ?';
    db.query(sql, [credit_card, expiry_date, CVV, billing_zip_code, email], (err, results)=>{
        if(err){
            throw err;
        }else{
            res.writeHead(201, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(results));
        }
    });
});


//curl -XPOST localhost:3000 -H  "Content-Type:application/json" -d '{"name":"mona", "email":"mona@gmail.com", "password":"1234", "address":"abcd", "city":"sf", "state":"CA", "zip_code":"12345", "phone_number":"123456", "credit_card":"1234567", "expiry_date":"01/21", "cvv": "123", "billing_zip_code":"12345"}'





