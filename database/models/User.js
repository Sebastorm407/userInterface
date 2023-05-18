const { Model, DataTypes } = require("sequelize");
const sequelize = require('../db.js');

class User extends Model {}
User.init({
    name: DataTypes.STRING,
    birthday: DataTypes.DATE
}, {
    sequelize,
    //Nombre de la tabla
    modelName: "user"
})

module.exports = User;