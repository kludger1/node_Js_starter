// creates an object for the express module
const express = require('express');
// helps set up your path system
const path = require('path');
const routes = require('./routes')
//runs the express module
const app = express();

//setting my engine, where you tell the server which version of your control you are going to use
app.set('view engine', 'ejs');

//this creates a static file server that allows client to download individual files needed to run the application
app.use(express.static(path.join(__dirname, 'public')))
//home route
app.get('/', routes.home )
//about route
app.get('/about',routes.about);

//set up port for cp to listen too
app.listen(8080, ()=> console.log('app listening on port 8080'))