const { Router } = require('express');
const sellerController = require('../controllers/seller.controller');
const salesController = require('../controllers/sales.controller');

const sellerRoute = Router();

sellerRoute.get('/', sellerController.getSalesBySeller);
sellerRoute.get('/:id', sellerController.getSaleByIdOrder);
sellerRoute.patch('/:id', salesController.updateStatus);

module.exports = sellerRoute;