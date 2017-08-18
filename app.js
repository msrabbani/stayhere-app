var express = require('express')
var app = express()

app.set('view engine','ejs')

const bodyParser = require ('body-parser');
app.use(bodyParser.urlencoded({ extended : false}))
app.use(bodyParser.json())

let index = require("./router/index-router");
let customer = require("./router/customer-router");
let house = require("./router/house-router");

app.use('/', index)
app.use('/customers', customer)
app.use('/houses', house)




app.listen(process.env.PORT||3000);
