const { Router } = require('express');
const salesController = require('../controllers/sales.controller');

const salesRoute = Router();

salesRoute.post('/checkout/:id', salesController.checkoutNewSale);
salesRoute.get('/', salesController.getAllSales);
salesRoute.get('/:id', salesController.getSaleById);
salesRoute.patch('/:id', salesController.updateStatus);


module.exports = salesRoute;