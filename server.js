
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const apiRoutes = require('./routes/APIRoutes');
app.use('/api', apiRoutes);

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());



app.use(express.static('src'));

app.listen(port, () => console.log(`listening on port ${port}!`));