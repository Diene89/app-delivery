const { Sales, SalesProducts, Products, sequelize } = require('../database/models');

module.exports = {
    async checkoutNewSale(data) {
        const t = await sequelize.transaction();
        console.log(data, 'dataaaaaa');
        
        try {
            const newSale = await Sales.create(data, 
                { transaction: t }, { raw: true });
            await Promise.all(Products.map(({ productId, quantity }) => SalesProducts.create(
                {
                    saleId: newSale.id, productId, quantity,
                },
                { transaction: t },
            )));
            
            await t.commit();
            return newSale;
        } catch (error) {
            await t.rollback();
            return error;
        }
    },
};
