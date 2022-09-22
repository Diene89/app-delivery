module.exports = (sequelize, DataTypes) => {
    const Sales = sequelize.define('sales', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
         },
         userId: {
            type: DataTypes.INTEGER,
            field: 'user_id' },
         sellerId: {
            type: DataTypes.INTEGER,
            field: 'seller_id' },
         totalPrice: {
            type: DataTypes.DECIMAL(9, 2), 
            field: 'total_price'
        },
         deliveryAddress: {
            type: DataTypes.STRING,
            field: 'delivery_address'
        },
         deliveryNumber: {
            type: DataTypes.STRING,
            field: 'delivery_number'
        },
         saleDate: {
            type: DataTypes.DATE,
            field: 'sale_date',
            defaultValue: DataTypes.NOW
        },
         status: DataTypes.STRING,
    }, {
        tableName: 'sales',
        timestamps: false,
    })
    Sales.associate = (models) => {
        models.sales.belongsTo(models.user,
            { foreignKey: 'sellerId', as: 'seller' },
            { foreignKey: 'userId', as: 'user' },
        );
        models.user.hasMany(Sales,
            {
                foreignKey: 'userId',
                sourceKeys: 'id',
                as: 'commom-user',
            },
            {
                foreignKey: 'sellerId',
                sourceKeyas: 'id',
                as: 'seller-user',
            }
        )
    };
    return Sales;
}