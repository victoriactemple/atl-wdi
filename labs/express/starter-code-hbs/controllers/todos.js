const express = require("express");
const router = express.Router();
const data = require("../data.js");

/* INDEX TODOS */
router.get('/', (req, res) => {
    console.log(data);
    res.render('todos/index', {
        todos: data.seededTodos
    });
});

/*  NEW */
router.get('/new', (req, res) => {
    res.render('todos/new')
});

/* SHOW TODOS*/
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todo = data.seededTodos[id];
    // is pointing to the array in the data.js

    // first argument is the path to the handlebars. Handlebars assumes that we're in the views folder. 
    if (!todo) {
        res.render('todos/show', {
            error: "No to-do found with this ID"
        })
    } else {
        res.render('todos/show', {
            todo: todo
        })
    }
});

/* SHOW TODONTS POST */

router.post('/', (req, res) => {
    console.log(req.body);
    const newTodo = req.body;
    data.seededTodos.push(newTodo);
    res.send("successfully created a todo");
    res.redirect('/todos')

})

//  CREATE AN EDIT ROUTE

router.get('/:id/edit', (req, res) => {
    res.render('todos/edit', {
        todo: {
            id: req.params.id,
            description: data.seededTodos[req.params.id].description,
            urgent: data.seededTodos[req.params.id].urgent,
        }
    });
});


// Create an UPDATE Route - PUT 

router.put('/:id', function(req, res) {
    const todoToEdit = data.seededTodos[req.params.id];
  
    todoToEdit.description = req.body.description;
    todoToEdit.urgent = req.body.urgent;
  
    res.redirect('/todos');
  })


// DELETE TODOS
router.delete('/:id', function (req, res) {
    data.seededTodos.splice(req.params.id, 1); // remove the item from the array

    res.redirect('/todos');  // redirect back to the index route
});




module.exports = router;