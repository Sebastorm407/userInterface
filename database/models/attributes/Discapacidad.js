const { Model, DataTypes} = require('sequelize')
const sequelize = require('../../db.js')

class Discapacidad extends Model {}
Discapacidad.init(
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Ingresa el nombre de la discapacidad"
                }
            }
        },
        tipo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Debes ingresar tu estado civil"
                }
            }
        }
    },
    {
        sequelize,
        modelName: "discapacidad",
        timestamps: false
    }
)

module.exports = Discapacidad;