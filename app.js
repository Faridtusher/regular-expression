const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3001
const hostname = '127.0.0.1'
const expressionRoute = require('./router/expression.router')

app.use(expressionRoute)


// create the home page
app.get('/',(req, res) =>{
   res.send('<h2>Home page</h2>')
})

// create the not found page
app.use((req, res) =>{
   res.send('<h2>404 !!! Not found page </h2>')
})


// export the file
module.exports = {
   app,
   hostname,
   port
}
