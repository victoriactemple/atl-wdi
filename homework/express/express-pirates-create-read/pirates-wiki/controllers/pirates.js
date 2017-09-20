//requirements
const express = require("express");
const router = express.Router();
const pirates = require('../models/pirates.js');
//all routes for /pirate

//INDEX
router.get("/", (req, res) => {
    const id = parseInt(req.params.id);
    console.log(pirates);
    res.render("pirates/index", {
        pirates: pirates
    });
});
//NEW
router.get("/new", (req, res) => {
    res.render("pirates/new");
})
//SHOW
router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const pirate = pirates[id];
    res.render("pirates/show", {
        pirate: pirate
    });

})
router.post("/", (req, res) => {
    console.log(req.body);
    const newPirate = req.body;
    pirates.push(newPirate);
    res.redirect('/pirates')
    
});
//exports
module.exports = router;