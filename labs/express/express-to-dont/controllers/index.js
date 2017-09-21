const express = require('express');
const router = express.Router();
const data = require('../models/data.js')

/* SHOW TODONTS INDEX */
router.get('/', (req, res) => {
    res.render('toDonts/index', {
        toDonts: data.seededToDonts
    });
});

/* SHOW TODONTS NEW */
router.get('/new', (req, res) =>{
    //go to the toDonts folder in views and render new
    res.render('toDonts/new')
});

/* SHOW TODONTS SHOW */
router.get('/:id', (req, res) => {
    //the wildecard "id" in the line above is the same as the ide in req.params.id
    const id = parseInt(req.params.id);
    //id in the line below is the variable we've just created above
    const todont = data.seededToDonts[id];


/* SHOW TODONTS ERROR */
if (!todont) {
    res.render('toDonts/show', {
        error: "No to-dont found with this ID"
    });
} else{
res.render('toDonts/show', {
    todont: todont
})
}

});

/* SHOW TODONTS POST */
router.post('/', (req, res) =>{
    const newToDont = req.body;
    data.seededToDonts.push(newToDont);
    res.redirect('/todonts')
});


/* SHOW TODONTS EDIT */

router.get('/:id/edit', (req, res) =>{
    res.render('toDonts/edit', {
        todont: {
            id: req.params.id,
            description: data.seededToDonts[req.params.id].description,
            urgent: data.seededToDonts[req.params.id].urgent,
        }
    });
});


/* SHOW TODONTS - PUT - UPDATE */
router.put('/:id', (req, res) => {
    const todontToEdit = data.seededToDonts[req.params.id];

    todontToEdit.description = req.body.description;
    todontToEdit.urgent = req.body.urgent;

    res.redirect('/todonts');
});

/* SHOW TODONTS DELETE */

router.delete('/:id', (req, res) =>{
    data.seededToDonts.splice(req.params.id, 1);

    res.redirect('/todonts');
});


module.exports = router