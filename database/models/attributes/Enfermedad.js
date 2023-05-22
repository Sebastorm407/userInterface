const { Model, DataTypes} = require('sequelize')
const sequelize = require('../../db.js')

class Enfermedad extends Model {}
Enfermedad.init(
    {
        tipo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Debes ingresar una enfermedad"
                }
            }
        }
    },
    {
        sequelize,
        modelName: "enfermedad",
        timestamps: false
    }
)

module.exports = Enfermedad;