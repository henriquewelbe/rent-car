const express = require('express');
const ejs = require('ejs');
const _ = require('lodash');
const cars = require(__dirname + '/car-data.js');

const app = express();
app.set('view engine', 'ejs'); 
app.use(express.static('public'));
app.locals._ = _;


app.get('/', function(req, res){
    res.render('index', {
        cars: cars.cars(),
    })
})


app.listen(3000, function(){
    console.log('Server running on port 3000');
})