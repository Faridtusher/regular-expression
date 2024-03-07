const express = require('express');
const app = express();
const port = 3000
const hostname = '127.0.0.1'




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
