const { Sales, SalesProducts, Products } = require('../database/models');

module.exports = {
    async checkoutNewSale(data, productsCart) {
        const newSale = await Sales.create(data);
        const products = [];
    
        productsCart.forEach((product) => products.push(Products.findOne({
            where: { name: product.name },
        })));

        const productList = await Promise.all(products);
    
        productList.forEach(({ id }, index) => SalesProducts.create({
            saleId: newSale.id, productId: id, quantity: productsCart[index].quantity,
        }));
        return newSale;
    },
};
