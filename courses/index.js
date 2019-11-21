const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

// Configs
require('./configs/environments');
require('./configs/mongo');

// Middlewares

app.use(logger(process.env.NODE_ENV === 'production' ? 'tiny' : 'dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.use(helmet());

const router = express.Router();
const courses = require('./api/routes');
courses(router);

router.route('/healthcheck').get((req, res) => res.send('OK'));

app.use('/api', router);

require('./middleware/handleError')(app);

module.exports = { app };
