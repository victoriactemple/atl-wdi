const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    const name = req.query.name;
    // const greeting = "hey there ";
    // res.send(`hi ${req.query.name}`)

    res.render("name", {})

})

module.exports = router;
