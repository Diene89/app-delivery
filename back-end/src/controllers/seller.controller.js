const sellerService = require('../services/seller.service');
// const jwtService = require('../services/utils/jwtService');

module.exports = {
  async getSalesByIdSeller(req, res) {
    const { id } = req.headers.authorization;
    const salesBySeller = await sellerService.getSalesByIdSeller(id);
    return res.status(200).json(salesBySeller);
  },
};