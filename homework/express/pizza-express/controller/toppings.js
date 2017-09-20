const express = require('express');
const router = express.Router();


router.get('/:type', (req, res, next) =>{
    const type = req.params.type;
//    res.render(`${type} a good choice!`);
   res.render("toppings", {
       toppings: type
   })

})


module.exports = router;