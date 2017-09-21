const express = require('express');
const app = express();
const hbs = require("hbs");
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

/* Controllers */
const todontsController = require('./controllers/index');


app.use(methodOverride('_method'));


app.use(bodyParser.urlencoded({extended:true}));

app.use('/todonts', todontsController);
//tells our app to use handlebars
app.set("view engine", "hbs");

app.get('/', (req, res) =>{
    res.send("This is the homepage");
})








const PORT = 3001
app.listen(PORT, () =>{
    console.log("Express is listening", PORT);
})