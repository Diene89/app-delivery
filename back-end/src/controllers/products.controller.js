const Product = require('../services/products.service')

module.exports = {
    async listProducts() {
        const result = await Product.listProducts();
        console.log(result, 'controlleeeeere');

        return res.status(200).json(result);
    }
}
