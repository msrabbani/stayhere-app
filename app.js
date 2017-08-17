var express = require('express')
var app = express()

app.set('view engine','ejs')

const bodyParser = require ('body-parser');
app.use(bodyParser.urlencoded({ extended : false}))
app.use(bodyParser.json())

let index = require("./router/index-router");
let house = require("./router/house-router");
// let customer = require("./router/customer-router");

app.use('/', index)
app.use('/houses', house)
// app.use('/customers', customer)


app.listen(3003, function(){console.log("nyabung ka express,port 3003")});
