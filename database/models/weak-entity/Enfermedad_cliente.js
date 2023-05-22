const { Model, DataTypes} = require('sequelize')
const sequelize = require('../../db.js')

class Enfermedad_cliente extends Model {}
Enfermedad_cliente.init(
    {
        
    },
    {
        sequelize,
        modelName: "enfermedad_cliente",
        timestamps: false
    }
)

module.exports = Enfermedad_cliente;