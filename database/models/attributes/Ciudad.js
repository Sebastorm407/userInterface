const { Model, DataTypes} = require('sequelize')
const sequelize = require('../../db.js')

class Ciudad extends Model {}
Ciudad.init(
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Debes ingresar una ciudad"
                }
            }
        }
    },
    {
        sequelize,
        modelName: "ciudad",
        timestamps: false
    }
)

module.exports = Ciudad;