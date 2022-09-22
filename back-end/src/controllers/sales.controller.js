const salesService = require('../services/sales.service');
// const checkIfExists = require('./utils/helpers');

module.exports = {
    async checkoutNewSale(req, res) {
        // const { id } = await checkIfExists(user.email);
        const { id } = req.params;
        const status = 'Pendente';
        const date = new Date();

        const {
            sellerId, totalPrice, deliveryAddress,
            deliveryNumber, productCart } = req.body;

        const result = await salesService.checkoutNewSale({
            userId: Number(id),
            sellerId,
            totalPrice,
            deliveryAddress,
            deliveryNumber,
            date,
            status,
        }, productCart);
        
        return res.status(201).json(result);
    },

  async getAllSales(req, res) {
    const { authorization } = req.headers;

    const sales = await salesService.getAllSales(authorization);

    return res.status(200).json(sales);
  },

  async getSaleById(req, res) {
    const { id } = req.params;

    const sale = await salesService.getSaleById(id);

    return res.status(200).json(sale);
  },

  async updateStatus(req, res) {
    const { id } = req.params;
    const { status } = req.body;

    await salesService.updateStatus(id, status);

    return res.status(201).json({ message: 'Successfully update' });
  },
};