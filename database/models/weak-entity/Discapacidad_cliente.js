const { Model, DataTypes} = require('sequelize')
const sequelize = require('../../db.js')

class Discapacidad_cliente extends Model {}
Discapacidad_cliente.init(
    {

    },
    {
        sequelize,
        modelName: "discapacidad_cliente",
        timestamps: false
    }
)

module.exports = Discapacidad_cliente;