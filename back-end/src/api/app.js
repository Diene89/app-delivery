const express = require('express');
require('express-async-errors');
const cors = require('cors');

const loginRoute = require('../routes/login.route');
const productsRoute = require('../routes/products.route');
const salesRoute = require('../routes/sales.route');
const registerRoute = require('../routes/register.route');
const adminRoute = require('../routes/admin.route');
const sellerRoute = require('../routes/seller.route');
const middlewareError = require('../middlewares/errors');
const sellersRoute = require('../routes/sellers.route');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/customer', productsRoute, salesRoute);
app.use('/customer/orders', salesRoute);
app.use('/admin', adminRoute);
app.use('/seller/orders', sellerRoute);
app.use('/sellers', sellersRoute);

app.use(middlewareError);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
