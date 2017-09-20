const express = require('express');
const router = express.Router();

router.get('/:amount/:size', (req, res, next) =>{
    const amount = req.params.amount;
    const size = req.params.size;
    const newArray = [amount, size];
    res.render("order", {
        newOrder: newArray
      
    })
})



module.exports = router;




// app.get('/order/:amount/:size', (req, res, next) =>{
//     const amount = req.params.amount;
//     const size = req.params.size;
//     const newArray = [amount, size];
//     // res.send(`Your order of ${amount} ${size} will be reading in 1 minute!`)
//     res.render('order', {
//         newOrder: newArray
//     })

// })