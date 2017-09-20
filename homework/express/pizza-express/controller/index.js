const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    const greeting = "Welcome to Pizza Express"
    res.render("index", {
        route: greeting
    })
})

module.exports = router;

// app.get('/', (req, res) =>{
//     const greeting = "Welcome to Pizza Express";
//     res.render("index", {
//         route: greeting})
// })
