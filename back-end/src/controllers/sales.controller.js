const Sale = require('../services/sales.service');

module.exports = {
    async checkoutNewSale(req, res) {
        const { id } = req.params;
        const status = 'Pendente';
        const date = new Date();

        const {
            sellerId, totalPrice, deliveryAddress,
            deliveryNumber, productCart } = req.body;

        const result = await Sale.checkoutNewSale({
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
};