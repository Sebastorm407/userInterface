const { Model, DataTypes} = require('sequelize')
const sequelize = require('../../db.js')

class Eps extends Model {}
Eps.init(
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Debes ingresar una eps"
                }
            }
        }
    },
    {
        sequelize,
        modelName: "eps",
        timestamps: false
    }
)

module.exports = Eps;