const { Router } = require('express');
const salesController = require('../controllers/sales.controller');

const salesRoute = Router();

salesRoute.post('/checkout', salesController.checkoutNewSale);
salesRoute.get('/orders', salesController.getAllSales);
salesRoute.get('/orders/:id', salesController.getSaleById);
salesRoute.patch('/orders/:id', salesController.updateStatus);

module.exports = salesRoute;