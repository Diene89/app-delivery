const { Router } = require('express');
const salesController = require('../controllers/sales.controller');

const salesRoute = Router();

salesRoute.post('/checkout/:id', salesController.checkoutNewSale);

module.exports = salesRoute;