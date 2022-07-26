const {Model, DataTypes} = require('sequelize');
const connection = require('../db/dbConection');


class users extends Model {
    static async findUserByEmail(email) {
        return this.findOne({
            where: {
                email
            }
        });
    }

    static associate(models) {

    }
}

users.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
    age: DataTypes.INTEGER,
    password: DataTypes.STRING
}, {
    sequelize: connection,
    modelName: 'users',
    tableName: 'users'
});




module.exports = users;