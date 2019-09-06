const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const errorHandler = require('./app/services/errorHandler')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));
app.use(errorHandler);

const server = app.listen(3001, (error) => {
    if (error) return console.log(`Error starting server: ${error}`);
    console.log(`API Server is running on port ${server.address().port}`);
});