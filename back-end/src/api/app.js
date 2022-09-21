const express = require('express');
const loginRoute = require('../routes/login.route');
const middlewareError = require('../middlewares/errors');

const app = express();

app.use('/login', loginRoute);

app.use(middlewareError);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
