const { sales, salesProducts, products, sequelize } = require('../database/models');

module.exports = {
    async checkoutNewSale(data, productCart) {
        const t = await sequelize.transaction();
    
        const productList = [];
        const product = await Promise.all(productList);
        productCart.forEach((item) => productList.push(products.findOne({ where: { name: item.name } })));
        const newSale = await sales.create(data);


        product.map(({ id }, index) => salesProducts.create({
            saleId: newSale.id, productId: id, quantity: productCart[index].quantity,
          }));

        return newSale;
        // try {
        //     const newSale = await sales.create(data, 
        //         { transaction: t }, { raw: true });
                
        //     await Promise.all(productsList.map(({ id }, index) => salesProducts.create(
        //         {
        //             saleId: newSale.id, productId: id, quantity: productCart[index].quantity,
        //         },
        //         { transaction: t },
        //     )));
            
        //     await t.commit();
        //     return newSale;
        // } catch (error) {
        //     console.log(error.message, 'erroooooo');
        //     await t.rollback();
        //     return error;
        // }
    },
};
