const express = require('express');
const app = express();
const hbs = require("hbs");
//inporting handlebars library and assigning it to the variable ^^Whenever you are asked to render something onto the page, look to 
//tells Express what to use for rendering templates

app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public'));
//dirname is a special key name that refers to the directory you're in
//only read the public folder of where we're currently on? 



app.get('/greeting', function(req, res) {
    console.log(req.query);
    
    res.render('greeting', {
      data: req.query.saying,
      name: "Jamie"
    });
});

app.get('/favorite-foods', (req, res) =>{
 var favoriteFoods = ["Jeni's Almond Butter ice cream", 'Tacos from Superica', 'A Breakfast Sandwich from Gjelina to go in Venice', 'Croissants from Bottega Louie in Downtown Los Angeles', 'Pizza from Little Star in San Francisco'];

    res.render('favorite-foods', {
     //object who's value is the array of favorite Foods
    favoriteFoods: favoriteFoods
 })
    });







//^^ this is telling express to use handlebars. 

// '/' is the path in order to hit the callback function. Whenever this path is hit by the client, run this callback function.
// app.get('/', (req, res) => {
//     res.send("hello wdi12");
// });

// app.get('/greeting', (req, res) => {
//     res.send("Hey!, WDI12");
// });

// app.get('/rihanna', (req, res) => {
//     res.send("werk, werk, werk, werk");
// });



// app.get('/food/:food/toppings/:topping', (req, res) =>{
//     console.log(req.params);
//     res.send(`I really love ${req.params.food} with ${req.params.topping}!`);
// });

// app.get('/add/:num1/:num2', (req, res) =>{
//     console.log(req.query);
//     const sum = num1 + num2;
//     res.send(`the total is sum ${sum}`);
// });

// app.get('/math/:operator', (req, res) => {
//     const num1 = parseInt(req.query.num1);
//     const num2 = parseInt(req.query.num2);
//     if (req.params.operator === "add") {
//         res.send(`${num1 + num2}`);
//     } else if (req.params.operator === "subtract") {
//         res.send(`${num1 - num2}`);
//     } else if (req.params.operator === "divide") {
//         res.send(`${num1 / num2}`);
//     } else if (req.params.operator === "multiply") {
//         res.send(`${num1 * num2}`);
//     } else {
//         res.send("invalid")
//     }


// });

//Make routes for add, subtract, multiply, divide that will take two numbers as query parameters num1 and num2 and perform the operation specified in the rout,e and send those answers to the browser.

// app.get('/add', (req, res) => {
//     const num1 = parseInt(req.query.num1);
//     const num2 = parseInt(req.query.num2);
//     res.send(`${num1 + num2}`);
// })

// anything after the :  is a variable. When you put a word after / in the browser, it will write on the page, Hello ___ name you've entered. 
// app.get('/:name', (req, res) => {
//     console.log(req.prarams);
//     res.send(`Hello, ${req.params.name}!`);
// });



const PORT = 3000;

// listening for any request 
//allows our server to hang out, not close and be there waiting for request to come in.
app.listen(PORT, () => {
    console.log("Express is listening on port ", PORT);
});