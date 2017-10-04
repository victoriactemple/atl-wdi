//======================
// REQUIREMENTS
//======================
// require express, mongoose, body-parser, method-override
var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var hbs = require("hbs");
var logger = require('morgan');

mongoose.Promise = global.Promise
//We haven't created this url i the command line, it's not necessary because if you go to create a schema, Mongoose will create it for you
mongoose.connect('mongodb://localhost/donut_store');


//======================
// MIDDLEWARE
//======================
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(methodOverride("_method"));

app.set("view engine", "hbs");
app.set('views', './views');

app.use(express.static(__dirname + 'public'));
app.use( logger('dev'));

//======================
// CONTROLLERS
//======================
//for seed file, seed the database
var seedController = require('./controllers/seeds.js');
app.use('/seed', seedController);
// ^^This first argument is the preface for all of our routes  (/seed)

//for root directory, show all donuts
var donutsController = require('./controllers/donuts.js');
app.use('/', donutsController);

//======================
// LISTENERS
//======================
//CONNECT MONGOOSE TO "donut_store"

//variable that will represent the connection we have to mongoose
//You need to use this mongoose.connection object. Has a few specific methods attached to it. 
const db = mongoose.connection;


/// Helps you with logging -- lets you know that Mongoose is connected

db.on('error', function (err) {
    console.log(err)
})

// Will log "database has been connected" if it successfully connects.
db.on('open', function () {
    console.log("database has been connected!");
});




const port = 3005
app.listen(port, () =>{
    console.log(`Express started on ${port}`)
})
//CREATE THE MONGOOSE CONNECTION and SET APP TO LISTEN to 3000
