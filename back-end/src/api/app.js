const express = require('express');
require('express-async-errors');
const cors = require('cors');

const loginRoute = require('../routes/login.route');
const registerRoute = require('../routes/register.route');
const productsRoute = require('../routes/products.route');
const middlewareError = require('../middlewares/errors');

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.json());

app.use('/login', loginRoute);
app.use('/register', registerRoute);

app.use('/customer', productsRoute);

app.use(middlewareError);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
