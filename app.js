const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3001
const hostname = '127.0.0.1'
const expressionRoute = require('./router/expression.router')

app.use(expressionRoute)

const middleware = (req, res, next) =>{
   console.log('Hello middle ware')
   next();
}

app.use(middleware)

app.use(express.static('public'))

// create the home page
app.get('/', (req, res) =>{
   console.log('Home page')
   res.send('<h2>Home page</h2>')
})

app.get('/about', (req, res) => {
   res.sendFile(__dirname + '/view/index.html')
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
