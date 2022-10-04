const Coupons = require('../services/coupons.service');

module.exports = {
    async findCoupon(req, res) {
        const { company } = req.body;

        const result = await Coupons.findCoupon(company);

        return res.status(200).json(result);
    },
};