module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define('products', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
         },
         name: DataTypes.STRING,
         price: DataTypes.DECIMAL(4, 2),
         urlImage: { type: DataTypes.STRING, field: 'url_image' },
    }, {
        tableName: 'products',
        timestamps: false,
    });

    return Products;
};
