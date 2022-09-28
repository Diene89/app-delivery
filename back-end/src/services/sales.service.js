const Joi = require('joi');
const { sales, salesProducts, user, sequelize } = require('../database/models');

const jwtService = require('./utils/jwtService');

module.exports = {

  validateRegisterBody(data) {
    const bodySchema = Joi.object({
      sellerId: Joi.number().required(),
      totalPrice: Joi.number().required(),
      deliveryAddress: Joi.string().required(),
      deliveryNumber: Joi.number().required(),
      productCart: Joi.array().items({ id: Joi.number().required(),
        name: Joi.string().required(),
        price: Joi.number().required(),
        quantity: Joi.number().required(),
      }),
    });
    const { error, value } = bodySchema.validate(data);
    if (error) {
      error.name = 'ValidationError';
      throw error;
    }
    return value;
  },

  async checkoutNewSale(data, productCart) {
    const t = await sequelize.transaction();

    try {
      const newSale = await sales.create(data);

    const arrayProduct = productCart.map((item) => ({
        saleId: newSale.dataValues.id, productId: item.id, quantity: item.quantity,
    }));

    await salesProducts.bulkCreate(arrayProduct);

    await t.commit();
        return newSale;
    } catch (error) {
      await t.rollback();
        return error;
    }
  },

  async getAllSales(token) {
    const { id } = jwtService.decodeToken(token);

    const saleList = await sales.findAll({ where: { userId: id } });

    if (!saleList.length) {
      return { message: 'Você não possui nenhuma compra' };
    }

    return saleList;
  },

  async getSaleById(id) {
    const sale = await sales.findByPk(id, {
      include: [{
        as: 'seller',
        model: user,
        attributes: ['name'],
      }],
    });

    if (!sale) {
      return { message: 'Compra não encontrada' };
    }

    return sale;
  },

  async updateStatus(id, status) {
    await sales.update(
      { status },
      { where: { id } },
    );
  },
};
