const { Router } = require('express');
const sellerController = require('../controllers/seller.controller');

const sellerRoute = Router();

sellerRoute.get('/', sellerController.getSalesBySeller);
sellerRoute.get('/:id', sellerController.getSaleByIdOrder);

module.exports = sellerRoute;