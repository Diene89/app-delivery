const Coupons = require('../services/coupons.service');

module.exports = {
    async findCoupon(req, res) {
        const { company } = req.body;
        console.log(company, "dataaaaaa");
        const result = await Coupons.findCoupon(company);
        
        return res.status(200).json(result);
    },
};