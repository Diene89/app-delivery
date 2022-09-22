const { Router } = require('express');
const sellerController = require('../controllers/seller.controller');

const sellerRoute = Router();

sellerRoute.get('/', sellerController.getSalesByIdSeller);

module.exports = sellerRoute;