const { Model, DataTypes} = require('sequelize')
const sequelize = require('../../db.js')

class Sexo extends Model {}
Sexo.init(
    {
        tipo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Debes ingresar tu sexo"
                }
            }
        }
    },
    {
        sequelize,
        modelName: "sexo",
        timestamps: false
    }
)

module.exports = Sexo;