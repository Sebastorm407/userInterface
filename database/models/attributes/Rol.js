const { Model, DataTypes} = require('sequelize')
const sequelize = require('../../db.js')

class Rol extends Model {}
Rol.init(
    {
        tipo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Debes ingresar el tipo de rol"
                }
            }
        }
    },
    {
        sequelize,
        modelName: "rol",
        timestamps: false
    }
)

module.exports = Rol;