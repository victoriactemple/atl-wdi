const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("hello wdi12");
});

app.get('/greeting', (req, res) => {
    res.send("Hey!, WDI12");
});

app.get('/rihanna', (req, res) => {
    res.send("werk, werk, werk, werk");
});



// app.get('/food/:food/toppings/:topping', (req, res) =>{
//     console.log(req.params);
//     res.send(`I really love ${req.params.food} with ${req.params.topping}!`);
// });

// app.get('/add/:num1/:num2', (req, res) =>{
//     console.log(req.query);
//     const sum = num1 + num2;
//     res.send(`the total is sum ${sum}`);
// });

app.get('/math/:operator', (req, res) =>{
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    if (req.params.operator === "add") {
        res.send(`${num1 + num2}`);
    } else if (req.params.operator === "subtract"){
        res.send(`${num1 - num2}`);
    } else if (req.params.operator === "divide"){
        res.send(`${num1 / num2}`);
    } else if (req.params.operator === "multiply"){
        res.send(`${num1} * ${num2}`);
    } else 

  
})

//Make routes for add, subtract, multiply, divide that will take two numbers as query parameters num1 and num2 and perform the operation specified in the rout,e and send those answers to the browser.

app.get('/add', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    res.send(`${num1 + num2}`);
})

// anything after the :  is a variable. When you put a word after / in the browser, it will write on the page, Hello ___ name you've entered. 
app.get('/:name', (req, res)=>{
    console.log(req.prarams);
    res.send(`Hello, ${req.params.name}!`);
});



const PORT = 3000;

app.listen(PORT, () => {
  console.log("Express is listening on port ", PORT);
});