const sellerService = require('../services/seller.service');

module.exports = {
  async getSalesBySeller(req, res) {
    const { authorization } = req.headers;
    const salesBySeller = await sellerService.getSalesBySeller(authorization);
    return res.status(200).json(salesBySeller);
  },

  async getSaleByIdOrder(req, res) {
    const { id } = req.params;
    const salesBySeller = await sellerService.getSaleByIdOrder(id);
    return res.status(200).json(salesBySeller);
  },

  async getAllSellers(_req, res) {
    const sellers = await sellerService.getAllSellers();
    return res.status(200).json(sellers);
  },

};