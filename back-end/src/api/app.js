const express = require('express');
require('express-async-errors');

const loginRoute = require('../routes/login.route');
const registerRoute = require('../routes/register.route');
const middlewareError = require('../middlewares/errors');

const app = express();
app.use(express.json());

app.use('/login', loginRoute);
app.use('/register', registerRoute);

app.use(middlewareError);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
