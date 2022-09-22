const Sale = require('../services/sales.service');

module.exports = {
    async checkoutNewSale(req, res) {
        const userId = req.params;
        const status = 'Pendente';
        const date = new Date();

        const {
            sellerId, totalPrice, deliveryAddress,
            deliveryNumber, productCart } = req.body;

        const result = await Sale.checkoutNewSale({
            userId,
            sellerId,
            totalPrice,
            deliveryAddress,
            deliveryNumber,
            date,
            status,
        }, productCart);
        console.log(result, 'controlleeeeeer');
        
        return res.status(201).json(result);
    },
};