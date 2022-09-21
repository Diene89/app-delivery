const Product = require('../services/products.service')

module.exports = {
    async products() {
        const result = await Product.listProducts();

        return res.status(200).json(result);
    }
}
