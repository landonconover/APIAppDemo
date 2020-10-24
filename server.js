//include the things
const express = require('express');
const bodyParser = require('body-parser');

//setup
const app = express();
const port = 3000;

//Api routes
const apiRoutes = require('./routes/APIRoutes');
app.use('/api', apiRoutes);

//static directory
app.use(express.static('src'));

//body parser stuff
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());

//listen for requests
app.listen(port, () => console.log(`listening on port ${port}!`));