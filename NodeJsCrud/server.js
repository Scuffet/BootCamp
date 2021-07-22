const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});

// Require article routes
const articleRoutes = require('./src/routes/article.routes')

// using as middleware
app.use('/article', articleRoutes)

// Require magazine routes
const magazineRoutes = require('./src/routes/magazine.routes')

// using as middleware
app.use('/magazine', magazineRoutes)

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});