const express = require('express');
const expressionRoute = express.Router();


expressionRoute.get('/regular/:id([0-9]{4})', (req, res) =>{
   const id = req.params.id;
   res.send(`Your id is : ${id}`)
})

expressionRoute.get('/regular/:id([a-zA-Z0-9]+)', (req, res) =>{
   res.send(`The value is : ${req.params.id}`)
})


// export
module.exports = expressionRoute;