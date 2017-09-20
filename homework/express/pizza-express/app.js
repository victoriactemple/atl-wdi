//require express package
const express = require('express');
//save an express module as 'app'
const app = express();
// assigning 3000 as our port
const PORT    = 3000;
const hbs = require('hbs');
const indexController = require('./controller/index.js');
const toppingsController = require('./controller/toppings.js');
const orderController = require('./controller/order.js');

app.set("view engine", "hbs");
// app.set('views', './views');
app.use(express.static(__dirname + '/public'));

app.use('/', indexController);
app.use('/toppings', toppingsController);
app.use('/:amount/:size', orderController);


// app.get('/', (req, res) =>{
//     const greeting = "Welcome to Pizza Express";
//     res.render("index", {
//         route: greeting})
// })

// app.get('/topping/:type', (req, res, next) =>{
//     const type = req.params.type;
// //    res.render(`${type} a good choice!`);
//    res.render("toppings", {
//        toppings: type
//    })

// })

// app.get('/order/:amount/:size', (req, res, next) =>{
//     const amount = req.params.amount;
//     const size = req.params.size;
//     const newArray = [amount, size];
//     // res.send(`Your order of ${amount} ${size} will be reading in 1 minute!`)
//     res.render('order', {
//         newOrder: newArray
//     })

// })

// tells the server to listen for requests on port 3000
app.listen(PORT, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + PORT);
  console.log("==========================")
});