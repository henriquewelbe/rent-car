const express = require('express');
const ejs = require('ejs');
const _ = require('lodash');
const mongoose = require('mongoose');
const carsDB = require(__dirname + '/car-schema.js');

const app = express();
app.set('view engine', 'ejs'); 
app.use(express.static('public'));
app.locals._ = _;

mongoose.connect('mongodb://localhost:27017/cars');

app.get('/', function(req, res){
    carsDB.Car().find({}, function(err, results){
        if (err){
            console.log(err);
        }else{
            const cars = []
            results.forEach(function(result){
                cars.push(result);
            })
            res.render('index', {
                cars: cars,
            })
        }
    })
})


app.listen(3000, function(){
    console.log('Server running on port 3000');
})