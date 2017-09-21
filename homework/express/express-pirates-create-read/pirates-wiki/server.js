/* packages */
const express     = require('express');
const hbs  = require('hbs');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
/* app settings*/
const app  = express();

var pirateController = require('./controllers/pirates.js');


const port = process.env.PORT || 3000;

// include the method-override package
//...
// after the app has been defined
// use methodOverride.  We will be adding a query parameter to our delete form named _method
app.use(methodOverride('_method'));


app.use(bodyParser.urlencoded({
    extended: true
  }));

/*Views*/
app.set('view engine', 'hbs');

// expierment with this line below...if you move the views folder out of place, will it find it? 
// app.set(‘views’, ‘/views’);
app.use(express.static(__dirname + '/public'));


//controllers for `/pirates` resource
app.use("/pirates", pirateController);






// Start server
app.listen(port, function() {
    console.info('Server Up', port,"//", new Date());
  });
  