const { Model, DataTypes} = require('sequelize')
const sequelize = require('../../db.js')

class Pais extends Model {}
Pais.init(
    {
        nombre: {
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
        modelName: "pais",
        timestamps: false
    }
)

module.exports = Pais;