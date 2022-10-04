const db = require('../database/models');

module.exports = {
    async findCoupon(company) {
        const coupon = await db.coupons.findOne({
            where: { company },
        });
        if (!coupon) {
            return { message: 'Cupom não encontrado' };
          }
        return coupon;
      },
};
