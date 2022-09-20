module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
         },
         name: DataTypes.STRING,
         password: DataTypes.STRING,
         email: DataTypes.STRING,
         role: DataTypes.STRING,
    }, {
        tableName: 'users',
        timestamps: false,
    })

    return User;
}
