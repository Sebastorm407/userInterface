const { Model, DataTypes} = require('sequelize')
const sequelize = require('../../db.js')

class Departamento extends Model {}
Departamento.init(
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Debes ingresar el departamento"
                }
            }
        }
    },
    {
        sequelize,
        modelName: "departamento",
        timestamps: false
    }
)

module.exports = Departamento;