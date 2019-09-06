const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const errorHandler = require('./app/services/errorHandler');
const CONFIG = require('./app/config/config');
const authRouter = require('./app/routes/v1/auth');
const postRouter = require('./app/routes/v1/posts');
const db = require('./app/config/db.config')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));
app.use(errorHandler);

app.use('/api/v1/', authRouter);
app.use('/api/v1/', postRouter);

db.sequelize.authenticate().then(() => console.log("Connection to MySQL database succesful"))
.catch(error => console.error('Cannot connect to MySQL: ', error));

const server = app.listen(CONFIG.port, (error) => {
    if (error) return console.log(`Error starting server: ${error}`);
    console.log(`API Server is running on port ${server.address().port}`);
});